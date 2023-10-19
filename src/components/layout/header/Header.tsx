import React, { useState } from 'react'

import clsx from 'clsx'
import { AppProps } from 'next/app'
import Image from 'next/image'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'

import ArrowSVG from '@/components/icons/arrow-left.svg'
import Link, { LinkProps } from '@/components/ui/link'
import { INFO } from '@/config'
import { useIsHome, useMediaQuery } from '@/lib/hooks'
import useFlickerReveal from '@/lib/hooks/useFlickerReveal'
import { useStore } from '@/lib/store'
import { down } from '@/lib/utils'

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

const NavItem = ({ children, className, isActive, isMounted, index, ...props }: LinkProps & { index?: number }) => (
  <div className={clsx('lg:flex lg:flex-1 lg:w-full', className, {
    'lg:justify-center': index === 1,
    'lg:justify-end': index === 2,
  })}>
    <Link
      className={clsx(
        'uppercase thinner leading-none px-4 py-2 lg:py-3 h-common border rounded-xl border-transparent transition-colors duration-300',
        {
          'hover:border-primary': isMounted,
          '!border-primary ': isActive && isMounted,
        }
      )}
      {...props}
    >
      {children}
    </Link>
  </div>
)

const Header = ({ pageProps, className }: HeaderProps) => {
  const pathname = usePathname()
  const isHome = useIsHome()
  // const [headerRef, { height: headerHeight }] = useMeasure()
  const isSmall = useMediaQuery(down('lg'))
  const { introProseComplete } = useStore()

  const [navAnimationComplete, setNavAnimationComplete] = useState(false)

  // const headerStyle = isSmall ? { height: headerHeight > 0 ? headerHeight : undefined } : undefined

  const navRef = useFlickerReveal({
    childNodes: true,
    // childStagger: '>0.05',
    childStagger: '>0.05',
    active: introProseComplete || (!isHome && isSmall),
    delay: !isHome && isSmall ? 1 : 0,
    once: true,
    onComplete: () => setNavAnimationComplete(true),
  })

  return (
    <header
      // className={clsx('relative w-full transition-[height] duration-700 lg:pb-10', className)}
      // style={headerStyle}
      className={clsx('relative w-full lg:pb-10', className)}
    >
      <div
        // ref={headerRef}
        className='w-full'
      >
        {/*-mt-2 -ml-4 lg:-mt-3 w-[calc(100%+2rem)]*/}
        <nav
          ref={navRef}
          className='flex flex-row justify-between -mt-2 text-xs opacity-0 lg:justify-start w-[calc(100%+1rem)] lg:w-full -lg:-ml-4 lg:-mt-3 lg:text-base'
        >
          {NAV_ITEMS.map(({ name, href, className }, index) => (
            <NavItem
              key={name}
              href={href}
              className={className}
              isActive={href === pathname || (!isSmall && href === '/company' && pathname === '/contact')}
              isMounted={navAnimationComplete}
              index={index}
            >
              {name}
            </NavItem>
          ))}
        </nav>
        <section
          className={clsx('flex flex-row justify-between items-center py-6 lg:hidden', {
            // hidden: isHome,
          })}
        >
          <div
            className={clsx('transition-[transform,opacity] duration-200 will-change-[opacity,transform]', {
              // '-translate-x-4': pathname === '/company',
              'opacity-0': isHome,
            })}
          >
            <NextLink
              className='block'
              href='/'
            >
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
