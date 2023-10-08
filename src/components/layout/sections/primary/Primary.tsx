import React, { PropsWithChildren } from 'react'

import clsx from 'clsx'
import { AppProps } from 'next/app'

import Header from '@/components/layout/header'
import Main from '@/components/layout/main'
import { useIsHome } from '@/lib/hooks'

type PrimaryProps = PropsWithChildren<{
  pageProps: AppProps['pageProps']
}>

const Primary = ({ pageProps, children }: PrimaryProps) => {
  const isHome = useIsHome()
  return (
    <section
      className={clsx('relative flex flex-col justify-between w-full max-w-lg lg:h-full p-container', {
        '-lg:h-auto': isHome,
      })}
    >
      <Header pageProps={pageProps} />
      <Main
        className='flex-grow'
        pageProps={pageProps}
      >
        {children}
      </Main>
    </section>
  )
}

export default Primary
