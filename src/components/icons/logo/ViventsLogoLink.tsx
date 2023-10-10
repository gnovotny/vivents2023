import React from 'react'

import clsx from 'clsx'
import Link from 'next/link'

import { useIsHome } from '@/lib/hooks'

import ViventsRingsLogo from './ViventsRingsLogo'
import ViventsTextLogo from './ViventsTextLogo'

const ViventsLogoLink = ({ className = '', ...props }) => (
  <Link
    href='/'
    className={clsx('flex flex-row items-center justify-center flex-1 pointer-events-auto space-x-2', className)}
    {...props}
  >
    <ViventsRingsLogo className='w-auto h-5 lg:h-8' />
    <ViventsTextLogo
      className={clsx('w-auto h-5 lg:h-8', {
        'hidden lg:block': !useIsHome(),
      })}
    />
  </Link>
)

export default ViventsLogoLink
