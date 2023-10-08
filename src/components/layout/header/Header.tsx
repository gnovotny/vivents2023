import React from 'react'

import clsx from 'clsx'
import { AppProps } from 'next/app'

import Link, { LinkProps } from '@/components/ui/link'

type HeaderProps = {
  pageProps: AppProps['pageProps']
}

const NavItem = ({ children, className, ...props }: LinkProps) => (
  <Link
    className={clsx('uppercase thinner', className)}
    {...props}
  >
    {children}
  </Link>
)

const Header = ({ pageProps }: HeaderProps) => {
  return (
    <header className='relative w-full'>
      <nav className='flex justify-between w-full'>
        <NavItem href='/company'>Company</NavItem>
        <NavItem href='/clients'>Clients</NavItem>
        <NavItem href='/app'>App</NavItem>
        <NavItem href='/contact'>Contact</NavItem>
      </nav>
    </header>
  )
}

export default Header
