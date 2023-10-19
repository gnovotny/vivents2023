import gsap from 'gsap'
import { SplitText } from 'gsap/dist/SplitText'

gsap.registerPlugin(SplitText)

export { gsap, SplitText }

export const flicker = (element: HTMLElement, frames = 15, delay = 0, onComplete = () => {}, xFactor = 0, yFactor = 0) => {
  const tl = gsap.timeline()

  if (delay) {
    tl.delay(delay)
  }

  Array.from({ length: frames }).forEach(() => {
    const frameDelay = Math.random() / 15
    const x = (Math.random() - 0.5) * xFactor * (Math.random() > 0.5 ? 1 : 0)
    const y = (Math.random() - 0.5) * yFactor * (Math.random() > 0.5 ? 1 : 0)
    tl.set(element, { opacity: Math.random(), xPercent: x, yPercent: y, delay: frameDelay })
  })

  tl.set(element, { opacity: 1, xPercent: 0, yPercent: 0 })

  tl.then(() => {
    onComplete?.()
  })
  return tl
}
