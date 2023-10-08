import React, { Children, isValidElement, useState, useRef, useEffect, ReactElement } from 'react'

import cn from 'clsx'
import { useKeenSlider } from 'keen-slider/react'

import s from './TeamSlider.module.css'
import {useMediaQuery} from "@/lib/hooks/useMediaQuery";
import {down} from "@/lib/utils/screens";

const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) => arr.slice(i * size, i * size + size))

export interface CustomSliderProps {
  children: ReactElement[]
  className?: string
  sliderClassName?: string
  onSlideChange?: (currentSlide: number) => void
  labelFn?: React.FC<any>
  type?: string
  chunkSize?: number
}

const TeamSlider: React.FC<CustomSliderProps> = ({
  children,
  className = '',
  sliderClassName = '',
  onSlideChange,
  labelFn: LabelFn,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMounted, setIsMounted] = useState(false)
  const sliderContainerRef = useRef<HTMLDivElement>(null)

  const isVerySmall = useMediaQuery(down('md'))


  const [ref, slider] = useKeenSlider<HTMLDivElement>({
    dragSpeed: 0.5,
    mode: 'snap',
    loop: true,
    slides: {
      perView: isVerySmall ? 1.4 : 3.4,
      origin: isVerySmall ? 'center' : 0.05,
    },
    created: () => setIsMounted(true),
    slideChanged(s) {
      const slideIndex = s.track?.details.rel
      onSlideChange && onSlideChange(slideIndex)
      setCurrentSlide(slideIndex)
    },
  })

  // Stop the history navigation gesture on touch devices
  useEffect(() => {
    let lastY = 0

    const preventBrowserNavigation = (event: TouchEvent) => {
      lastY = event.touches[0].clientY

      // Center point of the touch area
      const touchXPosition = event.touches[0].pageX
      // Size of the touch area
      const touchXRadius = event.touches[0].radiusX || 0

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
    <div
      className={cn(s.root, className)}
      ref={sliderContainerRef}
    >
      <div
        ref={ref}
        className={cn(s.slider, { [s.show]: isMounted }, 'keen-slider', sliderClassName)}
      >
        {Children.map(children, (child) => {
          // Add the keen-slider__slide className to children
          if (isValidElement(child)) {
            return {
              ...child,
              props: {
                ...child.props,
                className: `${child.props.className ? `${child.props.className} ` : ''}keen-slider__slide`,
              },
            }
          }
          return child
        })}
      </div>
      {LabelFn && <LabelFn {...children[currentSlide]?.props} />}
    </div>
  )
}

export default TeamSlider
