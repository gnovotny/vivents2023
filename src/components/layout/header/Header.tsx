import React from 'react'

import clsx from 'clsx'
import { AppProps } from 'next/app'
import Image from 'next/image'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'

import ArrowSVG from '@/components/icons/arrow-left.svg'
import Link, { LinkProps } from '@/components/ui/link'
import { INFO } from '@/config'
import { useIsHome } from '@/lib/hooks'

import discord from './assets/discord.png'
import insta from './assets/insta.png'
import linkedin from './assets/linkedin.png'

type HeaderProps = {
  className?: string
  pageProps: AppProps['pageProps']
}

const NAV_ITEMS = [
  { name: 'Company', href: '/company' },
  { name: 'Clients', href: '/clients' },
  { name: 'App', href: '/app' },
  { name: 'Contact', href: '/contact', className: 'lg:hidden' },
]

const NavItem = ({ children, className, isActive, ...props }: LinkProps) => (
  <Link
    className={clsx(
      'uppercase thinner leading-none px-4 py-2 lg:py-3 border rounded-xl border-transparent',
      {
        '!border-primary ': isActive,
      },
      className
    )}
    {...props}
  >
    {children}
  </Link>
)

const Header = ({ pageProps, className }: HeaderProps) => {
  const pathname = usePathname()
  const isHome = useIsHome()
  return (
    <header className={clsx('relative w-full', className)}>
      <nav className='flex justify-between -mt-2 -ml-4 text-xs lg:-mt-3 w-[calc(100%+2rem)] lg:text-base'>
        {NAV_ITEMS.map(({ name, href, className }) => (
          <NavItem
            key={name}
            href={href}
            className={className}
            isActive={href === pathname}
          >
            {name}
          </NavItem>
        ))}
      </nav>
      <section
        className={clsx('flex flex-row justify-between pt-8 lg:hidden', {
          hidden: isHome,
        })}
      >
        <div>
          <NextLink href='/'>
            <ArrowSVG className='w-6' />
          </NextLink>
        </div>
        <div
          className={clsx('hidden flex-row space-x-3', {
            '!flex': pathname === '/contact',
          })}
        >
          <a
            href={INFO.instagramUrl}
            target='_blank'
          >
            <Image
              src={insta}
              alt='Instagram'
            />
          </a>
          <a
            href={INFO.discordUrl}
            target='_blank'
          >
            <Image
              src={discord}
              alt='Discord'
            />
          </a>
          <a
            href={INFO.linkedinUrl}
            target='_blank'
          >
            <Image
              src={linkedin}
              alt='Linkedin'
            />
          </a>
        </div>
      </section>
    </header>
  )
}

export default Header
