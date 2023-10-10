import React, { useEffect, useRef, useState } from 'react'

import clsx from 'clsx'
import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'

import Text from '@/components/ui/text'
import Title from '@/components/ui/title'
import { useMediaQuery } from '@/lib/hooks'
import { down } from '@/lib/utils'

import { Member, members, coreMembers, advisors, artAdvisors } from './data'

function renderGroup(group: string) {
  switch (group) {
    case 'advisors':
      return 'Advisory Board'
    case 'artAdvisors':
      return 'Art Advisory Board'
    case 'core':
    default:
      return 'Core Team'
  }
}

function MemberLabel({
  member,
  className,
  withGroup = false,
  active,
}: {
  member: Member
  className?: string
  withGroup?: boolean
  active?: boolean
}) {
  return (
    <div className={clsx('relative block w-full pb-4 pt-10 lg:py-0', className)}>
      <div className={clsx('relative flex flex-col gap-1')}>
        {withGroup && <Title>{renderGroup(member.group)}</Title>}
        <div className='flex flex-col lg:flex-row lg:items-end lg:gap-2'>
          <Text className='!leading-none'>{member.name}</Text>
          <Text className='text-xs lg:text-[0.65rem] !leading-none lg:pb-[0.175em]'>{member.position}</Text>
        </div>
      </div>
    </div>
  )
}

function MemberGroup({
  id,
  members,
  className,
  active,
}: {
  id: string
  members: Member[]
  className?: string
  active?: Member
}) {
  return (
    <div className={clsx('relative block w-full', className)}>
      <div className={clsx('relative flex flex-col gap-2')}>
        <Title>{renderGroup(id)}</Title>
        <div className='relative flex flex-col gap-1'>
          {members.map((member, index) => (
            <button
              key={`member-{${index}`}
              className={clsx({
                'font-bold': active?.name === member.name,
              })}
            >
              <MemberLabel
                member={member}
                active={active?.name === member.name}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

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
      <div className={clsx('relative block h-full w-full rounded-xl overflow-hidden -lg:opacity-80')}>
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
          console.log(sliderContainerRef.current)
          console.log(slider.container.parentElement)
          // slider.container.addEventListener('mouseover', () => {
          // sliderContainerRef.current?.addEventListener('mouseover', () => {
          slider.container.parentElement?.addEventListener('mouseover', () => {
            mouseOver = true
            clearNextTimeout()
          })
          // slider.container.addEventListener('mouseout', () => {
          // sliderContainerRef.current?.addEventListener('mouseout', () => {
          slider.container.parentElement?.addEventListener('mouseout', () => {
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
    <section
      ref={sliderContainerRef}
      className={clsx('flex h-full flex-grow flex-col', className)}
    >
      <div
        ref={sliderRef}
        className={clsx(
          'keen-slider relative flex h-full lg:h-auto lg:aspect-square w-full lg:w-3/5 flex-grow lg:flex-grow-0 overflow-hidden -lg:full-w-common'
        )}
      >
        {members.map((member, index) => (
          <MemberSlide
            key={`member-slide-${index}`}
            member={member}
            active={index === currentSlide}
            className={'keen-slider__slide'}
            sliderDisabled={sliderDisabled}
          />
        ))}
      </div>

      <div className='lg:hidden'>
        <MemberLabel member={members[currentSlide]} />
      </div>

      {/*<SwiperNumbers*/}
      {/*  className='p-4 -lg:hidden'*/}
      {/*  length={images.length}*/}
      {/*  activeIndex={currentSlide}*/}
      {/*  setCurrentSlide={(slide: number) => slider.current?.moveToIdx(slide)}*/}
      {/*/>*/}
      <div className='flex-col hidden pt-10 lg:flex gap-6'>
        <MemberGroup
          id='core'
          members={coreMembers}
          active={members[currentSlide]}
        />
        <MemberGroup
          id='advisors'
          members={advisors}
          active={members[currentSlide]}
        />
        <MemberGroup
          id='artAdvisors'
          members={artAdvisors}
          active={members[currentSlide]}
        />
      </div>
    </section>
  )
}
