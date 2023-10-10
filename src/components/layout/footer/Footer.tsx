import React from 'react'

import { AppProps } from 'next/app'

import ViventsLogoLink from '@/components/icons/logo/ViventsLogoLink'
import Text from '@/components/ui/text'

type HeaderProps = {
  pageProps: AppProps['pageProps']
}

const Footer = ({ pageProps }: HeaderProps) => {
  return (
    <footer className='relative flex flex-row items-end justify-between w-full lg:flex-col-reverse lg:h-full lg:items-start'>
      <div>
        <ViventsLogoLink />
      </div>
      <div className='leading-none uppercase'>
        <Text className='leading-none !text-[0.55rem] lg:!text-xs'>© 2023 All rights reserved.</Text>
      </div>
    </footer>
  )
}

export default Footer
