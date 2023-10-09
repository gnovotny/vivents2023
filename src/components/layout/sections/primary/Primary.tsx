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
      className={clsx('relative flex flex-col justify-between w-full max-w-lg h-full p-common', {
        '-lg:h-auto -lg:pb-0': isHome,
      })}
    >
      <Header
        className='pb-6'
        pageProps={pageProps}
      />
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
