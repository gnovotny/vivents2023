import React, { PropsWithChildren } from 'react'

import clsx from 'clsx'
import { AppProps } from 'next/app'

import Header from '@/components/layout/header'
import Main from '@/components/layout/main'
import { useIsHome } from '@/lib/hooks'
import { useStore } from '@/lib/store'

type PrimaryProps = PropsWithChildren<{
  pageProps: AppProps['pageProps']
}>

const Primary = ({ pageProps, children }: PrimaryProps) => {
  // const isHome = useIsHome()
  // const { introComplete } = useStore()

  return (
    <section
      className={clsx(
        'primary relative flex flex-col justify-between w-full max-w-lg h-full p-common opacity-100 transition-opacity duration-1000 delay-500',
        {
          // '!opacity-0': isHome && !introComplete,
        }
      )}
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
