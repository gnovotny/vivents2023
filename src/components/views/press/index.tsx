import clsx from 'clsx'
import Image from 'next/image'

import BuchererSVG from './assets/bucherer.svg'
import HockeySVG from './assets/hockey.svg'
import JeanRemySVG from './assets/jeanremy.svg'
import LaliquePNG from './assets/lalique.png'
import PhiloroPNG from './assets/philoro.png'
import { useMediaQuery } from '@/lib/hooks'
import { down } from '@/lib/utils'
import { useEffect, useState } from 'react'

const CLIENTS = [
  {
    name: 'Lalique',
    // svg: <LaliqueSVG className='w-24 h-auto' />,
    img: (
      <Image
        src={LaliquePNG}
        alt={'Lalique'}
        className='w-24 h-auto'
      />
    ),
    href: 'https://lesmuses.lalique.com',
    text: '+',
  },
  {
    name: 'Bucherer',
    img: <BuchererSVG className='h-auto w-36' />,
    href: 'https://bucherer.ch',
    text: '+',
  },
  {
    name: 'Philoro',
    // img: <PhiloroSVG className='h-auto w-28' />,
    img: (
      <Image
        src={PhiloroPNG}
        alt={'Philoro'}
        className='h-auto w-28'
      />
    ),
    href: 'https://www.cryptovreneli.ch',
    text: '+',
  },
  {
    name: 'Swiss Ice Hockey',
    img: <HockeySVG className='w-12 h-auto lg:ml-8' />,
    text: <span className='uppercase text-[0.5rem] thinner'>Coming soon</span>,
  },
  {
    name: 'Jean-Remy',
    img: <JeanRemySVG className='w-32 h-auto' />,
    href: 'https://www.lifetimesculptures.com',
    text: '+',
  },
]

const Client = ({ name, href, img, text, target }: any) => (
  <a
    title={name}
    href={href}
    target={target}
    className={clsx('flex flex-col justify-center w-full h-full', {
      'pointer-events-none': !href,
    })}
  >
    <div className='flex flex-row items-center justify-between w-full h-full'>
      <div className='hidden lg:block' />
      {img}
      <div className='text-right'>{text}</div>
    </div>
  </a>
)

const Clients = () => {
  const [target, setTarget] = useState<'_blank' | undefined>('_blank')
  const isVerySmall = useMediaQuery(down('md'))

  useEffect(() => {
    setTarget(isVerySmall ? undefined : '_blank')
  }, [isVerySmall])

  return (
    <div className='flex flex-col w-full h-full lg:max-h-[60vh] border-y lg:border-t-0 border-[#d6d6d6] divide-y divide-[#d6d6d6]'>
      {CLIENTS.map((props, index) => (
        <Client
          key={index}
          target={target}
          {...props}
        />
      ))}
    </div>
  )
}

export default Clients
