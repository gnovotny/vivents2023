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
import { Signup } from '@/components/common/signup'
// import Map from '@/components/common/map'

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
    <div className='flex flex-col w-full h-full'>
      <div className='relative flex-grow w-full overflow-hidden rounded-xl'>
        {/*<m.div
        className='w-full h-full md:w-full md:absolute md:inset-0 will-change-[transform]'
        // className='w-full h-full md:w-[110%)] md:h-[110%)] md:absolute md:inset-[-5%] will-change-[transform]'
        // onMouseMove={!screenMdDown ? (e) => handleMouseMove(e) : undefined}
        // style={{
        //   transformStyle: 'preserve-3d',
        //   backfaceVisibility: 'hidden',
        //   x: mapInnerX,
        //   y: mapInnerY,
        // }}
      >
        <Map />
      </m.div>*/}
        <div className='relative w-full h-full'>
          <Map />
          {/*<Image*/}
          {/*  src={staticMapImg}*/}
          {/*  alt='map'*/}
          {/*  className='object-cover w-full h-full'*/}
          {/*/>*/}
        </div>
      </div>
      <div className='flex flex-col gap-6'>
        <div className='flex flex-row justify-between lg:justify-start lg:flex-col gap-6 pt-common'>
          <div className='flex flex-col lg:flex-row lg:justify-between'>
            <div className='flex flex-col gap-1'>
              <Title>Address</Title>
              <Text className='leading-none'>
                <span className='lg:hidden'>
                  {INFO.company}
                  <br />
                </span>
                {INFO.streetAddress}
                <br />
                {INFO.streetAddress2}
              </Text>
            </div>
            <div className='flex-col hidden lg:flex gap-1'>
              <Title>Social Media</Title>
              <div className={clsx('hidden lg:flex flex-row justify-end pt-2 space-x-3')}>
                <a
                  href={INFO.instagramUrl}
                  target='_blank'
                >
                  <Image
                    src={insta}
                    alt='Instagram'
                  />
                </a>
                <a
                  href={INFO.discordUrl}
                  target='_blank'
                >
                  <Image
                    src={discord}
                    alt='Discord'
                  />
                </a>
                <a
                  href={INFO.linkedinUrl}
                  target='_blank'
                >
                  <Image
                    src={linkedin}
                    alt='Linkedin'
                  />
                </a>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-6 lg:gap-0 lg:flex-row lg:justify-between'>
            <div className='flex flex-col gap-1'>
              <Title>Contact</Title>
              <NextLink href={`mailto:${INFO.email}`}>
                <Text className='leading-none'>{INFO.email}</Text>
              </NextLink>
            </div>
            <div className='flex flex-col gap-1'>
              <Link
                href='/imprint'
                className='group'
              >
                <Title className='group-hover:text-primary transition-colors duration-300'>Imprint</Title>
              </Link>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <Title>Newsletter</Title>
          <Signup />
        </div>
      </div>
    </div>
  )
}

export default ContactPage
