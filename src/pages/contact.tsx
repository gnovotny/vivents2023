import React, { useCallback } from 'react'

import clsx from 'clsx'
import { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import NextLink from 'next/link'

import Signup from '@/components/common/signup'
import discord from '@/components/layout/header/assets/discord.png'
import insta from '@/components/layout/header/assets/insta.png'
import linkedin from '@/components/layout/header/assets/linkedin.png'
import { Link } from '@/components/ui'
import Text from '@/components/ui/text'
import Title from '@/components/ui/title'
import { INFO } from '@/config'
// import Map from '@/components/common/map'

const Map = dynamic(() => import('src/components/views/map').then((m) => m.default), {
  ssr: false,
})
const ContactPage = ({ pageProps }: AppProps) => {

  return (
    <div className='flex flex-col w-full h-full'>
      <div className='relative flex-grow w-full overflow-hidden rounded-xl'>
        <div className='relative w-full h-full'>
          <Map />
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
          <div className='flex flex-col lg:gap-0 lg:flex-row lg:justify-between lg:items-end'>
            <div className='flex flex-col gap-1'>
              <Title>Contact</Title>
              <NextLink href={`mailto:${INFO.email}`}>
                <Text className='leading-none'>{INFO.email}</Text>
              </NextLink>
            </div>
            <div className='flex flex-col -lg:pt-[1.1rem]'>
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
