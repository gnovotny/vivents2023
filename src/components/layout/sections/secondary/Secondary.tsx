import React, { PropsWithChildren } from 'react'

import clsx from 'clsx'
import { AppProps } from 'next/app'

import IntroProse from '@/components/common/intro-prose'
import Footer from '@/components/layout/footer'
import { useIsHome } from '@/lib/hooks'

type PrimaryProps = PropsWithChildren<{
  pageProps: AppProps['pageProps']
}>

const Secondary = ({ pageProps, children }: PrimaryProps) => {
  const isHome = useIsHome()
  return (
    <section
      className={clsx(
        'relative flex flex-col justify-between w-full max-w-lg lg:max-w-md lg:h-full p-common -lg:!pt-0 pt-common lg:z-20',
        {
          'h-full': isHome,
        }
      )}
    >
      <div
        className={clsx('lg:pb-10', {
          'hidden lg:block': !isHome,
        })}
      >
        <IntroProse />
      </div>
      <Footer pageProps={pageProps} />
    </section>
  )
}

export default Secondary
