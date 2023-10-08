import React, { FC, PropsWithChildren } from 'react'

import { AppProps } from 'next/app'

import Footer from '@/components/layout/footer'

import Header from './header'
import Main from './main'
import clsx from 'clsx'
import Bg from '@/components/layout/bg'

type LayoutProps = {
  pageProps: AppProps['pageProps']
}

const Layout: FC<PropsWithChildren<LayoutProps>> = ({ children, pageProps }) => {
  return (
    <div className={clsx('flex flex-col w-full overflow-hidden h-screen min-h-screen max-h-screen', 'h-[100svh] min-h-[100svh] max-h-[100svh]')}>
      <Bg />
      <Header pageProps={pageProps} />
      <Main className='flex-grow' pageProps={pageProps}>{children}</Main>
      <Footer pageProps={pageProps} />
    </div>
  )
}

export default Layout
