import React from 'react'

import clsx from 'clsx'
import { AppProps } from 'next/app'

import IntroProse from '@/components/common/intro-prose'
import { useStore } from '@/lib/store'

const IndexPage = ({ pageProps }: AppProps) => {
  const { introComplete } = useStore()
  return (
    <div
      className={clsx('lg:hidden opacity-0 transition-opacity duration-1000 -mt-12', {
        '!opacity-100': introComplete,
      })}
    >
      <IntroProse />
    </div>
  )
}

export default IndexPage
