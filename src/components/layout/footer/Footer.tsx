import React from 'react'

import { AppProps } from 'next/app'
import ViventsLogoLink from '@/components/icons/logo/ViventsLogoLink'
import { Prose } from '@/components/ui'

type HeaderProps = {
  pageProps: AppProps['pageProps']
}

const Footer = ({ pageProps }: HeaderProps) => {
  return (
    <footer className='relative flex flex-row lg:flex-col-reverse lg:h-full justify-between items-end lg:items-start w-full'>
      <div>
        <ViventsLogoLink />
      </div>
      <div className='uppercase leading-none'>
        <Prose className='leading-none text-sm lg:text-xs' html={`© 2023 All rights reserved.`}/>
      </div>
    </footer>
  )
}

export default Footer
