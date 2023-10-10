import React from 'react'

import clsx from 'clsx'
import { AppProps } from 'next/app'

import ViventsLogoLink from '@/components/icons/logo/ViventsLogoLink'
import Text from '@/components/ui/text'
import { useStore } from '@/lib/store'
import { useIsHome } from '@/lib/hooks'

type HeaderProps = {
  pageProps: AppProps['pageProps']
}

const Footer = ({ pageProps }: HeaderProps) => {
  const isHome = useIsHome()
  const { introComplete } = useStore()
  return (
    <footer
      className={clsx(
        'relative flex flex-row items-end justify-between w-full lg:flex-col-reverse lg:h-full lg:items-start',
        {}
      )}
    >
      <div>
        <ViventsLogoLink />
      </div>
      <Text
        className={clsx(
          'leading-none !text-[0.55rem] lg:!text-xs opacity-100 transition-opacity duration-1000 delay-500',
          {
            '!opacity-0': isHome && !introComplete,
          }
        )}
      >
        © 2023 All rights reserved.
      </Text>
    </footer>
  )
}

export default Footer
