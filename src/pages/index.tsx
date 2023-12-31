import React from 'react'

import clsx from 'clsx'
import { AppProps } from 'next/app'

import IntroProse from '@/components/common/intro-prose'
import { useStore } from '@/lib/store'

const IndexPage = ({ pageProps }: AppProps) => {
  const { introVideoComplete } = useStore()
  return (
    <div
      className={clsx('lg:hidden !opacity-100 transition-opacity duration-1000 -mt-12', {
        // '!opacity-0': !introComplete, // TODO
      })}
    >
      <IntroProse />
    </div>
  )
}

export default IndexPage
