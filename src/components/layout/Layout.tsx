import React, { FC, PropsWithChildren, useEffect } from 'react'

import clsx from 'clsx'
import { AppProps } from 'next/app'

import Bg from './bg'
import Blur from './blur'
import Primary from './sections/primary'
import Secondary from './sections/secondary'
import { useStore } from '@/lib/store'
import Signup from '@/components/common/signup'
import { useTimeout } from '@/lib/hooks'

type LayoutProps = {
  pageProps: AppProps['pageProps']
}

const SignupUI: FC = () => {
  const { displaySignup, closeSignup, openSignup } = useStore()

  useEffect(() => {

  }, [])

  const open = () => openSignup()

  useTimeout(open, 1000)

  return (
    <Signup
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
          'h-[100svh] min-h-[100svh] max-h-[100svh]'
        )}
      >
        <Bg />
        <Primary pageProps={pageProps}>{children}</Primary>
        <Secondary pageProps={pageProps} />
        <Blur />
      </div>
      <SignupUI />
    </>
  )
}

export default Layout
