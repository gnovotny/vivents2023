import { useEffect, useRef } from 'react'

import { flicker, SplitText, gsap } from '@/lib/gsap'

type FlickerRevealProps = {
  active?: boolean
  flickerFrames?: number
  delay?: number
  stDuration?: number
  stStagger?: number
  childStagger?: number | string
  // selector?: string
  childNodes?: boolean
  once?: boolean
  split?: boolean
  onComplete?: () => void
}

export default function useFlickerReveal({
  active = false,
  flickerFrames,
  delay = 0,
  stDuration = 0.0375,
  stStagger = 0.018,
  childNodes,
  childStagger,
  onComplete,
  once = false,
  split = false,
}: FlickerRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  // const isSmall = useMediaQuery(down('lg'))

  const executionCountRef = useRef(0)

  // Set up the timeout.
  useEffect(() => {
    if (
      !active ||
      !ref.current ||
      getComputedStyle(ref.current).display === 'none' ||
      (once && executionCountRef.current > 0)
    )
      return

    // const elements = selector ? ref.current.querySelectorAll(selector) : [ref.current]
    const elements = childNodes ? Array.from(ref.current.children) : [ref.current]

    let totalTime = 0
    let stTL: gsap.core.Timeline
    let splitTexts: any[]

    const flickerTl = flicker(ref.current, flickerFrames ?? (split ? totalTime * 15 * 3 : 20), delay, !split ? onComplete : undefined) // * 3 for good measure to account for randomness

    let killFlickerTimeout: NodeJS.Timeout | undefined

    if (split) {
      stTL = gsap.timeline()

      if (delay) {
        stTL.delay(delay)
      }

      splitTexts = elements
        .filter((elem) => getComputedStyle(elem).display !== 'none')
        .map((elem) => {
          const splitText = new SplitText(elem, { type: 'chars, words' })
          const time = splitText.chars.length * stStagger
          totalTime += time
          stTL.from(
            splitText.chars,
            { duration: stDuration, opacity: 0, stagger: stStagger, ease: 'power1.in' },
            childStagger ?? `>-${time / 2}`
          )
          return splitText
        })

      stTL.then(() => {
        executionCountRef.current++
        onComplete?.()

        if (!flickerFrames) {
          killFlickerTimeout = setTimeout(() => {
            flickerTl.kill()
            gsap.set(ref.current, { opacity: 1 })
          }, 100)
        }
      })
    }

    return () => {
      if (executionCountRef.current > 0) return

      flickerTl.kill()
      if (killFlickerTimeout) {
        clearTimeout(killFlickerTimeout)
      }
      if (ref.current && once) {
        gsap.set(ref.current, { opacity: 0 })
      }
      splitTexts?.forEach((splitText) => splitText.revert())
      stTL?.kill()
    }
  }, [/*ref.current, */ active])

  return ref
}
