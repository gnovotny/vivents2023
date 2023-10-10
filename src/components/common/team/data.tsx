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
  name: string
  position?: ReactNode | string
  image: Omit<ImageProps, 'alt'> & {
    alt?: string
  }
}

export const coreMembers: Member[] = [
  {
    name: 'Sarah Schlagenhauf',
    position: <>CEO & CO-FOUNDER</>,
    image: {
      src: sarah,
    },
  },
  {
    name: 'Adam Mann',
    position: <>CSO & CO-FOUNDER</>,
    image: {
      src: adam,
      // objectPosition: '0% 50%',
    },
  },
  {
    name: 'Linus Inderbitzin',
    position: 'CTO',
    image: {
      src: linus,
    },
  },
  {
    name: 'Ilija Gautschi',
    position: 'Art Director',
    image: {
      src: ilija,
      // objectPosition: '50% 70%',
    },
  },
  {
    name: 'Walid El Barbir',
    position: 'Head of Design',
    image: {
      src: walid,
      // objectPosition: '50% 30%',
    },
  },
  {
    name: 'AUDREY RAPPOLD',
    position: 'GRAPHIC DESIGN',
    image: {
      src: audrey,
      // objectPosition: '50% 30%',
    },
  },
  {
    name: 'dimitri erhard',
    position: 'MOTION & CGI DESIGN',
    image: {
      src: dimitri,
      // objectPosition: '50% 30%',
    },
  },
  {
    name: 'Jacco Püsmann',
    position: 'Copywriter',
    image: {
      src: jacco,
      // objectPosition: '50% 30%',
    },
  },
  {
    name: 'Gabe Novotny',
    position: 'Fullstack Developer',
    image: {
      src: gabe,
    },
  },
]
export const advisors: Member[] = [
  {
    name: 'Dr. Tobias Reichmuth',
    position: 'Entrepreneurial Advisor',
    image: {
      src: tobias,
    },
  },
  {
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
    name: 'Michael Hinderling',
    position: 'Digital Innovation Advisor',
    image: {
      src: michael,
    },
  },
  {
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
    name: 'Richard Schäli',
    position: 'New Economy Advisor',
    image: {
      src: schaeli,
    },
  },
]
export const artAdvisors: Member[] = [
  {
    name: 'Sophie Neuendorf',
    position: 'VP Artnet',
    image: {
      src: sophie,
    },
  },
  {
    name: 'Jonathan Levy',
    position: 'Art Professional / Entrepreneur',
    image: {
      src: levi,
    },
  },
  {
    name: 'Nadine A. Ghaffar',
    position: 'Founder Art D‘Égypte',
    image: {
      src: nadine,
    },
  },
  {
    name: 'Michelle Edelmann',
    position: 'CEO, Traffic Creative Management',
    image: {
      src: michelle,
    },
  },
]

export const members = {
  coreMembers,
  advisors,
  artAdvisors,
}
