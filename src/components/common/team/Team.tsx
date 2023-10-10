import React, { useEffect, useRef, useState } from 'react'

import clsx from 'clsx'
import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'

import { useMediaQuery } from '@/lib/hooks'
import { down } from '@/lib/utils'

import { Member, members } from './data'

function MemberSlide({
  member,
  active,
  className,
  isInteractive = false,
  sliderDisabled = true,
}: {
  member: Member
  active?: boolean
  className?: string
  isInteractive?: boolean
  sliderDisabled?: boolean
}) {
  return (
    <div
      className={clsx(
        'relative block h-full w-full -lg:px-2',
        sliderDisabled && '!absolute inset-0 opacity-0 transition-opacity duration-1000',
        active && sliderDisabled && '!opacity-100',
        className
      )}
    >
      <div className={clsx('relative block h-full w-full rounded-xl overflow-hidden')}>
        <Image
          fill
          sizes='(min-width: 1024px) 33vw, 100vw'
          priority={active}
          loading='eager'
          src={member.image.src}
          alt={member.image.alt ?? member.name}
          className={clsx(
            'relative h-full w-full object-cover',
            {
              'transition duration-300 ease-in-out group-hover:scale-105': isInteractive,
            },
            member.image.className
          )}
        />
      </div>
    </div>
  )
}

export default function Team({ className }: { className?: string }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const sliderContainerRef = useRef<HTMLDivElement>(null)

  const isSmall = useMediaQuery(down('lg'))

  const [sliderIsMounted, setSliderIsMounted] = useState(false)

  const sliderDisabled = !sliderIsMounted || !isSmall

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      dragSpeed: 0.5,
      mode: 'snap',
      loop: true,
      slides: {
        perView: isSmall ? 1.4 : 1,
        origin: 'center',
        // origin: isSmall ? 'center' : 0.05,
      },
      disabled: sliderDisabled,
      created: () => setSliderIsMounted(true),
      slideChanged(s) {
        const slideIndex = s.track?.details.rel
        setCurrentSlide(slideIndex)
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 3000)
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on('dragStarted', clearNextTimeout)
        slider.on('animationEnded', nextTimeout)
        slider.on('updated', nextTimeout)
      },
    ]
  )

  // Stop the history navigation gesture on touch devices
  useEffect(() => {
    let lastY = 0

    const preventBrowserNavigation = (event: TouchEvent) => {
      lastY = event?.touches[0]?.clientY || 0

      // Center point of the touch area
      const touchXPosition = event?.touches[0]?.pageX || 0
      // Size of the touch area
      const touchXRadius = event?.touches[0]?.radiusX || 0

      // We set a threshold (10px) on both sizes of the screen,
      // if the touch area overlaps with the screen edges
      // it's likely to trigger the navigation. We prevent the
      // touchstart event in that case.
      if (touchXPosition - touchXRadius < 10 || touchXPosition + touchXRadius > window.innerWidth - 10)
        event.preventDefault()
    }

    const sliderElement = sliderContainerRef.current!

    if (sliderElement) {
      sliderElement.addEventListener('touchstart', preventBrowserNavigation)
    }

    return () => {
      if (sliderElement) {
        sliderElement.removeEventListener('touchstart', preventBrowserNavigation)
      }
    }
  }, [slider])

  return (
    <section className={clsx('flex h-full flex-grow flex-col', className)}>
      <div
        ref={sliderRef}
        className={clsx(
          'keen-slider relative flex h-full lg:h-auto lg:aspect-square w-full flex-grow lg:flex-grow-0 overflow-hidden -lg:full-w-common'
        )}
      >
        {[...members.coreMembers, ...members.advisors, ...members.artAdvisors].map((member, index) => (
          <MemberSlide
            key={`team-slide-${index}`}
            member={member}
            active={index === currentSlide}
            className={'keen-slider__slide'}
            sliderDisabled={sliderDisabled}
          />
        ))}
      </div>
      {/*<SwiperNumbers*/}
      {/*  className='p-4 -lg:hidden'*/}
      {/*  length={images.length}*/}
      {/*  activeIndex={currentSlide}*/}
      {/*  setCurrentSlide={(slide: number) => slider.current?.moveToIdx(slide)}*/}
      {/*/>*/}
    </section>
  )
}
