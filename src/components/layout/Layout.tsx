import React, { FC, PropsWithChildren } from 'react'

import clsx from 'clsx'
import { AppProps } from 'next/app'

import Bg from '@/components/layout/bg'
import Primary from '@/components/layout/sections/primary'
import Secondary from '@/components/layout/sections/secondary'

type LayoutProps = {
  pageProps: AppProps['pageProps']
}

const Layout: FC<PropsWithChildren<LayoutProps>> = ({ children, pageProps }) => {
  return (
    <div
      className={clsx(
        'flex flex-col lg:flex-row-reverse -lg:items-center justify-between w-full overflow-hidden h-screen min-h-screen max-h-screen',
        'h-[100svh] min-h-[100svh] max-h-[100svh]'
      )}
    >
      <Bg />
      <Primary pageProps={pageProps}>
        {children}
      </Primary>
      <Secondary pageProps={pageProps} />
    </div>
  )
}

export default Layout
