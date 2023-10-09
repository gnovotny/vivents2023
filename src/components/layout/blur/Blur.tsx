import React, { MutableRefObject, useRef, useState } from 'react'

import clsx from 'clsx'
import { useStore } from '@/lib/store'

const Blur = () => {

  const { displaySignup } = useStore()


  return (
    <div
      className={clsx(
        'fixed w-full h-full inset-0 backdrop-blur-0 transition-[backdrop-filter] duration-1000 pointer-events-none will-change-[backdrop-filter] overflow-hidden lg:z-10',
        {
          '!backdrop-blur-md': displaySignup,
        }
      )}
    >
    </div>
  )
}

export default Blur
