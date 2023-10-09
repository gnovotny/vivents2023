import { AppProps } from 'next/app'
import clsx from 'clsx'
import IntroProse from '@/components/common/intro-prose'
import React from 'react'

const IndexPage = ({ pageProps }: AppProps) => {
  return (
    <div
      className={clsx('lg:hidden')}
    >
      <IntroProse />
    </div>
  )
}

export default IndexPage
