import React, { useCallback } from 'react'

import clsx from 'clsx'
import { useMotionValue, useSpring, useTransform } from 'framer-motion'
import { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import NextLink from 'next/link'

import discord from '@/components/layout/header/assets/discord.png'
import insta from '@/components/layout/header/assets/insta.png'
import linkedin from '@/components/layout/header/assets/linkedin.png'
import { Link } from '@/components/ui'
import Text from '@/components/ui/text'
import Title from '@/components/ui/title'
import { INFO } from '@/config'
import { useMediaQuery, useSize } from '@/lib/hooks'
import { down } from '@/lib/utils'
// import Map from '@/components/common/map'

const Map = dynamic(() => import('@/components/common/map').then((m) => m.default), {
  ssr: false,
})
const ImprintPage = ({ pageProps }: AppProps) => {
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
    <div className='flex flex-col w-full h-full'>
      IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT
      IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT
      IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT
      IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT
      IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT
      IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT IMPRINT

    </div>
  )
}

export default ImprintPage
