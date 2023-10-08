import React from 'react'

import clsx from 'clsx'
import Link from 'next/link'

import ViventsRingsLogo from './ViventsRingsLogo'
import ViventsTextLogo from './ViventsTextLogo'

const ViventsLogoLink = ({ className = '', ...props }) => (
  <Link
    href='/'
    className={clsx('flex flex-row items-center justify-center flex-1 pointer-events-auto space-x-2', className)}
    {...props}
  >
    <ViventsRingsLogo className='w-auto h-4 lg:h-9' />
    <ViventsTextLogo className='w-auto h-4 lg:h-9' />
  </Link>
)

export default ViventsLogoLink
