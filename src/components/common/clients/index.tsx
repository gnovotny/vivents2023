import Image from 'next/image'

import LaliqueSVG from './assets/lalique.svg'
import PhiloroSVG from './assets/philoro.svg'
import BuchererSVG from './assets/bucherer.svg'
import HockeySVG from './assets/hockey.svg'
import JeanRemySVG from './assets/jeanremy.svg'

const CLIENTS = [
  {
    name: 'Lalique',
    // src: '/images/clients/lalique.svg',
    // SVG: LaliqueSVG,
    svg: <LaliqueSVG className='w-24 h-auto' />,
    href: 'https://lesmuses.lalique.com',
    text: '+',
  },
  {
    name: 'Bucherer',
    // src: '/images/clients/bucherer.svg',
    // SVG: BuchererSVG,
    svg: <BuchererSVG className='w-36 h-auto' />,
    href: 'https://bucherer.ch',
    text: '+',
  },
  {
    name: 'Philoro',
    // src: '/images/clients/philoro.svg',
    // SVG: PhiloroSVG,
    svg: <PhiloroSVG className='w-28 h-auto' />,
    href: 'https://philoro.ch',
    text: '+',
  },
  {
    name: 'Swiss Ice Hockey',
    // src: '/images/clients/hockey.svg',
    // SVG: HockeySVG,
    svg: <HockeySVG className='w-12 h-auto' />,
    href: 'https://sih.ch',
    text: <span className='text-[0.5rem] uppercase thinner'>Coming soon</span>,
  },
  {
    name: 'Jean-Remy',
    // src: '/images/clients/jeanremy.svg',
    // SVG: JeanRemySVG,
    svg: <JeanRemySVG className='w-32 h-auto' />,
    href: 'https://jean-remy.com',
    text: '+',
  },
]

const Client = ({ name, href, svg, text }) => (
  <a
    title={name}
    href={href}
    target='_blank'
    className='flex flex-col justify-center w-full h-full'
  >
    <div className='flex flex-row items-center justify-between w-full h-full'>
      <div className='hidden lg:block' />
      {/*<Image*/}
      {/*  width={100}*/}
      {/*  height={50}*/}
      {/*  src={src}*/}
      {/*  alt={name}*/}
      {/*/>*/}
      {/*<SVG />*/}
      { svg }
      <div className='text-right'>{text}</div>
    </div>
  </a>
)

const Clients = () => {
  return (
    <div className='flex flex-col w-full h-full lg:max-h-[60vh] border-y lg:border-t-0 border-[#d6d6d6]  divide-y divide-[#d6d6d6]'>
      {CLIENTS.map((props, index) => (
        <Client
          key={index}
          {...props}
        />
      ))}
    </div>
  )
}

export default Clients
