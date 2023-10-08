import { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { m, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useCallback } from 'react'
import { useMediaQuery } from '@/lib/hooks'
import { down } from '@/lib/utils'
import { useSize } from '@/lib/hooks/useSize'

const Map = dynamic(() => import('@/components/common/map').then((m) => m.default), {
  ssr: false,
})

const ContactPage = ({ pageProps }: AppProps) => {
  const { height: wHeight, width: wWidth } = useSize()

  const screenMdDown = useMediaQuery(down('md'))

  const vWidth = isFinite(wWidth) ? wWidth : 100
  const vHeight = isFinite(wHeight) ? wHeight : 100

  const mouseX = useMotionValue(vWidth / 2)
  const mouseY = useMotionValue(vHeight * (screenMdDown ? 0.5 : 0.75))
  const mouseSpringX = useSpring(mouseX, { stiffness: 300, damping: 100 })
  const mouseSpringY = useSpring(mouseY, { stiffness: 300, damping: 100 })
  const mapInnerX = useTransform(mouseSpringX, [0, vWidth], ['-5%', '5%'])
  const mapInnerY = useTransform(mouseSpringY, [screenMdDown ? 0 : vHeight / 2, vHeight], ['-5%', '5%'])

  const handleMouseMove = useCallback(
    ({ clientX, clientY }: MouseEvent) => {
      mouseX.set(clientX)
      mouseY.set(clientY)
    },
    [mouseX, mouseY]
  )

  return (
    <div
      className='relative w-full aspect-square overflow-hidden'
    >
      <m.div
        className='w-full h-full md:w-[110%)] md:h-[110%)] md:absolute md:inset-[-5%] will-change-[transform]'
        onMouseMove={!screenMdDown ? (e) => handleMouseMove(e) : undefined}
        style={{
          transformStyle: 'preserve-3d',
          backfaceVisibility: 'hidden',
          x: mapInnerX,
          y: mapInnerY,
        }}
      >
        <Map />
      </m.div>
    </div>
  )
}

export default ContactPage
