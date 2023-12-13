import { useEffect, useState } from 'react'

import clsx from 'clsx'
import Image from 'next/image'

import { useMediaQuery } from '@/lib/hooks'
import { down } from '@/lib/utils'

import bilanzPNG from './assets/bilanz.png'
import blickPNG from './assets/blick.png'
import nzzPNG from './assets/nzz-bellevue.png'
import pPNG from './assets/p.png'
import robbPNG from './assets/robb.png'
import srfPNG from './assets/srf.png'

const PRESS_ITEMS = [
  {
    name: 'Bilanz',
    img: (
      <Image
        src={bilanzPNG}
        alt={'Bilanz'}
        className='w-20 h-auto'
      />
    ),
    href: 'https://www.handelszeitung.ch/bilanz/bucherer-beteiligt-sich-an-kunst-startup',
    text: '+',
  },
  {
    name: 'SRF',
    img: (
      <Image
        src={srfPNG}
        alt={'SRF'}
        className='w-14 h-auto'
      />
    ),
    href: 'https://www.srf.ch/play/tv/kulturplatz/video/kunstmarkt-neu-denken-art-deal?urn=urn:srf:video:50478e09-29b9-4417-9466-9738f0c68c1b',
    text: '+',
  },
  {
    name: 'Robb Report',
    img: (
      <Image
        src={robbPNG}
        alt={'Robb Report'}
        className='w-32 h-auto'
      />
    ),
    href: '/docs/ROBB_Report.pdf',
    text: '+',
    target: '_blank',
  },
  {
    name: 'Blick',
    img: (
      <Image
        src={blickPNG}
        alt={'Blick'}
        className='w-16 h-auto'
      />
    ),
    href: 'https://www.blick.ch/wirtschaft/digital-und-faelschungssicher-schweizer-goldhaendler-bringt-das-krypto-vreneli-id18447000.html',
    text: '+',
  },
  {
    name: 'Persönlich',
    img: (
      <Image
        src={pPNG}
        alt={'Persönlich'}
        className='w-10 h-auto'
      />
    ),
    href: 'https://www.persoenlich.com/gesellschaft/meine-frau-mochte-die-uhr-nie',
    text: '+',
  },
  {
    name: 'NZZ Bellevue',
    img: (
      <Image
        src={nzzPNG}
        alt={'NZZ Bellevue'}
        className='w-24 h-auto'
      />
    ),
    href: 'https://bellevue.nzz.ch/uhren-schmuck/bucherer-uhren-und-schmuckbrand-arbeitet-mit-dem-startup-artdeal-zusammen-ld.1645753',
    text: '+',
  },
]

const PressItem = ({ name, href, img, text, target }: any) => (
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

const Press = () => {
  const [target, setTarget] = useState<'_blank' | undefined>('_blank')
  const isVerySmall = useMediaQuery(down('md'))

  useEffect(() => {
    setTarget(isVerySmall ? undefined : '_blank')
  }, [isVerySmall])

  return (
    <div className='flex flex-col w-full h-full lg:max-h-[60vh] border-y lg:border-t-0 border-[#d6d6d6] divide-y divide-[#d6d6d6]'>
      {PRESS_ITEMS.map((props, index) => (
        <PressItem
          key={index}
          target={target}
          {...props}
        />
      ))}
    </div>
  )
}

export default Press
