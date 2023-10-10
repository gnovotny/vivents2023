import React from 'react'

import clsx from 'clsx'
import { AppProps } from 'next/app'
import Image from 'next/image'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import useMeasure from 'react-use-measure'

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
  const [headerRef, { height: headerHeight }] = useMeasure()

  return (
    <header
      className={clsx('relative w-full transition-[height] duration-700', className)}
      // style={{ maxHeight: headerHeight ?? undefined, minHeight: headerHeight ?? undefined}}
      style={{ height: headerHeight > 0 ? headerHeight : undefined }}
    >
      <div
        ref={headerRef}
        className='w-full'
      >
        {/*-mt-2 -ml-4 lg:-mt-3 w-[calc(100%+2rem)]*/}
        <nav className='flex justify-between w-full -mt-2 text-xs lg:-mt-3 lg:text-base'>
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
          className={clsx('flex flex-row justify-between items-center py-6 lg:hidden', {
            hidden: isHome,
          })}
        >
          <div>
            <NextLink href='/'>
              <ArrowSVG className='w-6' />
            </NextLink>
          </div>
          <div
            className={clsx('flex flex-row space-x-3 opacity-0 transition-opacity duration-300', {
              '!opacity-100': pathname === '/contact',
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
      </div>
    </header>
  )
}

export default Header
