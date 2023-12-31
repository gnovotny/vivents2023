import React from 'react'

import clsx from 'clsx'

import { useIsHome } from '@/lib/hooks'
import { useStore } from '@/lib/store'

const Blur = () => {
  const { displaySignup } = useStore()
  const isHome = useIsHome()

  return (
    <div
      className={clsx(
        'fixed w-full h-full inset-0 backdrop-blur-0 transition-[backdrop-filter] duration-1000 pointer-events-none will-change-[backdrop-filter] overflow-hidden lg:z-10',
        {
          '!backdrop-blur-md': displaySignup,
          '-lg:!backdrop-blur-xl': !isHome,
        }
      )}
    />
  )
}

export default Blur
