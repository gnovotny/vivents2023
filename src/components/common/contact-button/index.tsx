import type { FunctionComponent } from 'react'

import clsx from 'clsx'

import ArrowSVG from '@/components/icons/arrow-right-short.svg'
import { Button } from '@/components/ui'
import Link from 'next/link'

interface ContactButtonProps {
  className?: string
}

const ContactButton: FunctionComponent<ContactButtonProps> = ({ className }) => {
  return (
    <Link href='/contact'>
      <Button className={clsx('px-5', className)}>
        Contact <ArrowSVG className='w-4 h-auto pl-1 inline-block' />
      </Button>
    </Link>
  )
}

export default ContactButton
