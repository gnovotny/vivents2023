import React, { FC, PropsWithChildren, useEffect } from 'react'

import clsx from 'clsx'
import { AppProps } from 'next/app'

import { SignupDrawer } from '@/components/common/signup'
import { useTimeout } from '@/lib/hooks'
import { useStore } from '@/lib/store'

import Bg from './bg'
import Blur from './blur'
import Primary from './sections/primary'
import Secondary from './sections/secondary'

type LayoutProps = {
  pageProps: AppProps['pageProps']
}

const SignupUI: FC = () => {
  const { displaySignup, closeSignup, openSignup } = useStore()

  useTimeout(openSignup, 1500)

  return (
    <SignupDrawer
      open={displaySignup}
      onClose={closeSignup}
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
