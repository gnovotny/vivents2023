import React from 'react'

import clsx from 'clsx'
import { AppProps } from 'next/app'

import ViventsLogoLink from '@/components/icons/logo/ViventsLogoLink'
import Text from '@/components/ui/text'
import { useIsHome, useMediaQuery } from '@/lib/hooks'
import useFlickerReveal from '@/lib/hooks/useFlickerReveal'
import { useStore } from '@/lib/store'
import { down } from '@/lib/utils'

type HeaderProps = {
  pageProps: AppProps['pageProps']
}

const Footer = ({ pageProps }: HeaderProps) => {
  const isHome = useIsHome()
  // const isSmall = useMediaQuery(down('lg'))
  const { introProseComplete } = useStore()

  const copyrightRef = useFlickerReveal({
    // flickerFrames: 115,
    // childNodes: true,
    // stDuration: 0.14,
    // stStagger: 0.01,
    once: true,
    active: introProseComplete && isHome,
    // delay: !isHome && isSmall ? 1 : 0,
  })

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
      <div
        ref={copyrightRef}
        className={clsx('transition-opacity duration-300', {
          'opacity-0': isHome && !introProseComplete,
        })}
      >
        <Text
          className={clsx(
            'leading-none !text-[0.55rem] lg:!text-xs',
            // 'opacity-100 transition-opacity duration-1000 delay-500',
            {
              // 'lg:!opacity-0': !introComplete, // TODO
            }
          )}
        >
          © 2023 All rights reserved.
        </Text>
      </div>
    </footer>
  )
}

export default Footer
