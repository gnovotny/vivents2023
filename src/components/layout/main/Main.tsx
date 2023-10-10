import React, { PropsWithChildren } from 'react'

import cn from 'clsx'
import { AppProps } from 'next/app'

import PageTransitionStack from './PageTransitionStack'

type MainProps = PropsWithChildren<{
  className?: string
  pageProps: AppProps['pageProps']
}>

const Main = ({ children, className }: MainProps) => {
  return (
    <main
      className={cn('relative w-full', className)}
    >
      <PageTransitionStack
        customClassName='w-full h-full'
        customInactiveClassName='inset-0'
      >
        {children}
      </PageTransitionStack>
    </main>
  )
}
export default Main
