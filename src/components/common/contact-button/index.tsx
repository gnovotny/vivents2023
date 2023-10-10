import type { FunctionComponent } from 'react'

import clsx from 'clsx'
import Link from 'next/link'

import ArrowSVG from '@/components/icons/arrow-right-short.svg'
import { Button } from '@/components/ui'

interface ContactButtonProps {
  className?: string
}

export const ContactButton: FunctionComponent<ContactButtonProps> = ({ className }) => {
  return (
    <Link href='/contact'>
      <Button className={clsx('px-5', className)}>
        Contact <ArrowSVG className='inline-block w-4 h-auto pl-1' />
      </Button>
    </Link>
  )
}

export const ContactButtonVariant: FunctionComponent<ContactButtonProps> = ({ className }) => {
  return (
    <Link href='/contact'>
      <Button className={clsx('px-5 !w-full !h-9 !text-sm !leading-none', className)}>
        Contact
      </Button>
    </Link>
  )
}

export default ContactButton
