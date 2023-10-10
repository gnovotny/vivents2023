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
      <Button className={clsx('px-5 lg:w-[8.5rem]', className)}>
        <span>Contact</span>
        <ArrowSVG className='inline-block w-3 h-auto ml-1' />
      </Button>
    </Link>
  )
}

export const ContactButtonVariant: FunctionComponent<ContactButtonProps> = ({ className }) => {
  return (
    <Link href='/contact'>
      <Button className={clsx('px-5 !w-full !text-sm !leading-none', className)}>
        Contact
      </Button>
    </Link>
  )
}

export default ContactButton
