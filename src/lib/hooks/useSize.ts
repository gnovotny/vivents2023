import { useState, useEffect } from 'react'

import { ResizeObserver as Polyfill } from '@juggle/resize-observer'
import pkg from 'debounce'

const isBrowser = typeof window !== 'undefined'
export interface Size {
  width: number
  height: number
}

type ConfigProps = {
  debounce?: number
}

/*
 * Triggers a resize only if the Canvas DOM element changed dimensions - not on window resize event
 *
 * This is to avoid costly re-renders when the URL bar is scrolled away on mobile
 *
 * Based on: https://usehooks.com/useSize/
 */

export function useSize({ debounce = 0 }: ConfigProps = {}) {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [size, setSize] = useState<Size>({
    width: isBrowser ? window.innerWidth : Infinity,
    height: isBrowser ? window.innerHeight : Infinity,
  })

  useEffect(() => {
    // check if we can use another element - if so, base size on element instead of window
    // since 100vh !== window.innerHeight on mobile
    // const element = document.getElementById('')
    const element: HTMLElement | null = null

    // Handler to call on window resize
    function handleResize() {
      const width = element ? element.clientWidth : window.innerWidth
      const height = element ? element.clientHeight : window.innerHeight

      if (width !== size.width || height !== size.height) {
        // Set window width/height to state
        setSize({
          width,
          height,
        })
      }
    }

    const debouncedResize = pkg.debounce(handleResize, debounce)

    // Add event listener
    const ResizeObserver = window.ResizeObserver || Polyfill
    let observer: ResizeObserver
    if (element) {
      observer = new ResizeObserver(debouncedResize)
      observer.observe(element)
    } else {
      window.addEventListener('resize', debouncedResize)
    }
    // Call handler right away so state gets updated with initial window size
    handleResize()
    // Remove event listener on cleanup
    return () => {
      window.removeEventListener('resize', debouncedResize)
      observer?.disconnect()
    }
  }, [size, setSize])

  return size
}
