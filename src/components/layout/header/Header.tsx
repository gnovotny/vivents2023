import React from 'react'

import clsx from 'clsx'
import { AppProps } from 'next/app'
import { usePathname } from 'next/navigation'

import Link, { LinkProps } from '@/components/ui/link'

type HeaderProps = {
  pageProps: AppProps['pageProps']
}

const NAV_ITEMS = [
  { name: 'Company', href: '/company' },
  { name: 'Clients', href: '/clients' },
  { name: 'App', href: '/app' },
  { name: 'Contact', href: '/contact' },
]

const NavItem = ({ children, className, isActive, ...props }: LinkProps) => (
  <Link
    className={clsx('uppercase thinner leading-none px-4 py-3 border rounded-xl border-transparent', {
      '!border-primary ': isActive
    }, className)}
    {...props}
  >
    {children}
  </Link>
)

const Header = ({ pageProps }: HeaderProps) => {
  const pathname = usePathname()
  return (
    <header className='relative w-full -mt-3'>
      <nav className='flex justify-between w-full'>
        {NAV_ITEMS.map(({ name, href }) => (
          <NavItem
            key={name}
            href={href}
            isActive={href === pathname}
          >
            {name}
          </NavItem>
        ))}
      </nav>
    </header>
  )
}

export default Header
