import React, { FC, PropsWithChildren, useEffect } from 'react'

import clsx from 'clsx'
import { AppProps } from 'next/app'
import { usePathname } from 'next/navigation'

import SignupDrawer from '@/components/views/signup-drawer'
import { useStore } from '@/lib/store'

import Bg from './bg'
import Blur from './blur'
import Primary from './sections/primary'
import Secondary from './sections/secondary'

type LayoutProps = {
  pageProps: AppProps['pageProps']
}

const SignupUI: FC = () => {
  const { displaySignup, closeSignup, openSignup, introVideoComplete } = useStore()
  const pathname = usePathname()

  useEffect(() => {
    if (introVideoComplete) {
      setTimeout(openSignup, 20000)
    }
  }, [introVideoComplete, openSignup])

  return (
    <SignupDrawer
      open={displaySignup}
      onClose={closeSignup}
      blurOverlay={pathname === '/company'}
    />
  )
}

const Layout: FC<PropsWithChildren<LayoutProps>> = ({ children, pageProps }) => {
  return (
    <>
      <div
        className={clsx(
          'flex flex-col lg:flex-row-reverse -lg:items-center justify-between w-full overflow-hidden h-screen min-h-screen max-h-screen',
          '!h-[100svh] !min-h-[100svh] !max-h-[100svh]'
        )}
      >
        <Bg />
        <Blur />
        <Primary pageProps={pageProps}>{children}</Primary>
        <Secondary pageProps={pageProps} />
      </div>
      <SignupUI />
    </>
  )
}

export default Layout
