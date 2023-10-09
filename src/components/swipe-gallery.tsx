'use client'

import React, { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import { useKeenSlider } from 'keen-slider/react'
import { down } from 'lib/media-query'
import { useMediaQuery } from 'lib/use-media-query'
import { useParams, usePathname, useSearchParams } from 'next/navigation'
import Image from 'next/image'
import SwiperDots from '../swiper-dots'
import SwiperNumbers from '../swiper-numbers'

type GalleryImage = { src: string; altText: string; className?: string }

function GallerySlide({
  image,
  active,
  className,
  isInteractive = false,
  sliderDisabled = true
}: {
  image: GalleryImage
  active?: boolean
  className?: string
  isInteractive?: boolean
  sliderDisabled?: boolean
}) {
  return (
    <div
      className={clsx(
        'relative block h-full w-full',
        sliderDisabled && '!absolute inset-0 opacity-0 transition-opacity duration-1000',
        active && sliderDisabled && '!opacity-100',
        className
      )}
    >
      <div className={clsx('relative block h-full w-full')}>
        <Image
          fill
          sizes='(min-width: 1024px) 66vw, 100vw'
          priority={active}
          loading='eager'
          src={image.src}
          alt={image.altText}
          className={clsx(
            'relative h-full w-full object-cover',
            {
              'transition duration-300 ease-in-out group-hover:scale-105': isInteractive
            },
            image.className
          )}
        />
      </div>
    </div>
  )
}

export function SwipeGallery({
  images,
  className
}: {
  images: GalleryImage[]
  className?: string
}) {
  const pathname = usePathname()
  // const params = useParams()
  //
  // const searchParams = useSearchParams()
  // const imageSearchParam = searchParams?.get('image')
  // const imageIndex = imageSearchParam ? parseInt(imageSearchParam) : 0
  //
  // const nextSearchParams = new URLSearchParams(searchParams?.toString())
  // const nextImageIndex = imageIndex + 1 < images.length ? imageIndex + 1 : 0
  // nextSearchParams.set('image', nextImageIndex.toString())
  // const nextUrl = createUrl(pathname!, nextSearchParams)
  //
  // const previousSearchParams = new URLSearchParams(searchParams?.toString())
  // const previousImageIndex = imageIndex === 0 ? images.length - 1 : imageIndex - 1
  // previousSearchParams.set('image', previousImageIndex.toString())
  // const previousUrl = createUrl(pathname!, previousSearchParams)

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
        perView: 1,
        origin: 'center'
      },
      disabled: sliderDisabled,
      created: () => setSliderIsMounted(true),
      slideChanged(s) {
        const slideIndex = s.track?.details.rel
        setCurrentSlide(slideIndex)
      }
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
      }
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
      if (
        touchXPosition - touchXRadius < 10 ||
        touchXPosition + touchXRadius > window.innerWidth - 10
      )
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
    <section className={clsx('flex flex-col', className)}>
      <div
        ref={sliderRef}
        className={clsx('keen-slider relative flex h-full w-full flex-grow overflow-hidden')}
      >
        {images.map((image, index) => (
          <GallerySlide
            key={`gallery-image-${index}`}
            image={image}
            active={index === currentSlide}
            className={'keen-slider__slide'}
            sliderDisabled={sliderDisabled}
          />
        ))}
        <SwiperDots
          className='absolute bottom-0 left-1/2 -translate-x-1/2 p-4 lg:hidden'
          length={images.length}
          activeIndex={currentSlide}
          dotClassName='border-white'
          activeDotClassName='bg-white'
        />
        <SwiperNumbers
          className='absolute bottom-0 left-0 p-4 -lg:hidden'
          length={images.length}
          activeIndex={currentSlide}
          numberClassName='text-white'
          setCurrentSlide={(slide: number) => slider.current?.moveToIdx(slide)}
        />
      </div>
    </section>
  )
}
