import React, { ReactNode } from 'react'

import { ImageProps } from 'next/image'

import adam from './assets/adam.jpg'
import audrey from './assets/audrey.jpg'
import claudia from './assets/claudia.jpg'
import dimitri from './assets/dimitri.jpg'
import gabe from './assets/gabe.jpg'
import ilija from './assets/ilija.jpg'
import jacco from './assets/jacco.jpg'
import levi from './assets/levy.jpg'
import linus from './assets/linus.jpg'
import michael from './assets/michael.jpg'
import michelle from './assets/michele.jpg'
import nadine from './assets/nadine.jpg'
import schaeli from './assets/schaeli.jpg'
import sarah from './assets/sarah.jpg'
import sophie from './assets/sophie.jpg'
import gautschi from './assets/stefan.jpg'
import tobias from './assets/tobias.jpg'
import walid from './assets/walid.jpg'

export type Member = {
  group: string
  name: string
  email?: string
  position?: ReactNode | string
  image: Omit<ImageProps, 'alt'> & {
    alt?: string
  }
}

export const coreMembers: Member[] = [
  {
    group: 'core',
    name: 'Sarah Schlagenhauf',
    email: 'sarah@artdeal.ch',
    position: <>CEO & CO-FOUNDER</>,
    image: {
      src: sarah,
    },
  },
  {
    group: 'core',
    name: 'Adam Mann',
    email: 'adam@artdeal.ch',
    position: <>CSO & CO-FOUNDER</>,
    image: {
      src: adam,
      // objectPosition: '0% 50%',
    },
  },
  {
    group: 'core',
    name: 'Linus Inderbitzin',
    email: 'linus@artdeal.ch',
    position: 'CTO',
    image: {
      src: linus,
    },
  },
  {
    group: 'core',
    name: 'Ilija Gautschi',
    email: 'ilija@artdeal.ch',
    position: 'Art Director',
    image: {
      src: ilija,
      // objectPosition: '50% 70%',
    },
  },
  {
    group: 'core',
    name: 'Walid El Barbir',
    email: 'walid@artdeal.ch',
    position: 'Head of Design',
    image: {
      src: walid,
      // objectPosition: '50% 30%',
    },
  },
  {
    group: 'core',
    name: 'AUDREY RAPPOLD',
    email: 'audrey@artdeal.ch',
    position: 'GRAPHIC DESIGN',
    image: {
      src: audrey,
      // objectPosition: '50% 30%',
    },
  },
  // {
  //   group: 'core',
  //   name: 'dimitri erhard',
  //   position: 'MOTION & CGI DESIGN',
  //   image: {
  //     src: dimitri,
  //     // objectPosition: '50% 30%',
  //   },
  // },
  {
    group: 'core',
    name: 'Jacco Prüsmann',
    email: 'mail@artdeal.ch',
    position: 'Copywriter',
    image: {
      src: jacco,
      // objectPosition: '50% 30%',
    },
  },
  {
    group: 'core',
    name: 'Gabe Novotny',
    email: 'mail@artdeal.ch',
    position: 'Fullstack Developer',
    image: {
      src: gabe,
    },
  },
]
export const advisors: Member[] = [
  {
    group: 'advisors',
    name: 'Dr. Tobias Reichmuth',
    position: 'Entrepreneurial Advisor',
    image: {
      src: tobias,
    },
  },
  {
    group: 'advisors',
    name: 'Claudia Bolliger-Winkler',
    position: (
      <>
        VR,Scale-Up & AI Advisor
      </>
    ),
    image: {
      src: claudia,
    },
  },
  {
    group: 'advisors',
    name: 'Michael Hinderling',
    position: 'Digital Innovation Advisor',
    image: {
      src: michael,
    },
  },
  {
    group: 'advisors',
    name: 'Stefan Gautschi',
    position: (
      <>
        VR, CEO Apricum Circle AG
      </>
    ),
    image: {
      src: gautschi,
    },
  },
  {
    group: 'advisors',
    name: 'Richard Schäli',
    position: 'New Economy Advisor',
    image: {
      src: schaeli,
    },
  },
]
export const artAdvisors: Member[] = [
  {
    group: 'artAdvisors',
    name: 'Sophie Neuendorf',
    position: 'VP Artnet',
    image: {
      src: sophie,
    },
  },
  {
    group: 'artAdvisors',
    name: 'Jonathan Levy',
    position: 'Art Professional / Entrepreneur',
    image: {
      src: levi,
    },
  },
  {
    group: 'artAdvisors',
    name: 'Nadine A. Ghaffar',
    position: 'Founder Art D‘Égypte',
    image: {
      src: nadine,
    },
  },
  {
    group: 'artAdvisors',
    name: 'Michelle Edelmann',
    position: 'CEO, Traffic Creative Management',
    image: {
      src: michelle,
    },
  },
]

export const members = [...coreMembers, ...advisors, ...artAdvisors]
