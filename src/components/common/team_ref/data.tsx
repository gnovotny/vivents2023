import React, { ReactNode } from 'react'

import { ImageProps } from 'next/image'

import adam from '@/components/common/team/assets/adam.jpg'
import claudia from '@/components/common/team/assets/claudia.jpg'
import ilija from '@/components/common/team/assets/ilija.jpg'
import jacco from '@/components/common/team/assets/jacco.jpg'
import gabriel from '@/components/common/team/assets/gabriel.jpg'
import levi from '@/components/common/team/assets/levi.jpg'
import linus from '@/components/common/team/assets/linus.jpg'
import gez from '@/components/common/team/assets/gez.png'
import melanie from '@/components/common/team/assets/melanie.png'
import michael from '@/components/common/team/assets/michael.jpg'
import michelle from '@/components/common/team/assets/michelle.jpg'
import nadine from '@/components/common/team/assets/nadine.jpg'
import rachid from '@/components/common/team/assets/rashid.jpg'
import richard from '@/components/common/team/assets/richard.jpg'
import sarah from '@/components/common/team/assets/sarah.jpg'
import sophie from '@/components/common/team/assets/sophie.jpg'
import gautschi from '@/components/common/team/assets/stefan.jpg'
import tobias from '@/components/common/team/assets/tobias.jpg'
import walid from '@/components/common/team/assets/walid.jpg'

export type Member = {
  name?: ReactNode | string
  position?: ReactNode | string
  image?: Omit<ImageProps, 'alt'>
}

export const coreMembers: Member[] = [
  {
    name: 'Sarah Schlagenhauf',
    position: (
      <>
        Chief Executive Officer
        <br />
        Co-Founder
      </>
    ),
    image: {
      src: sarah,
    },
  },
  {
    name: 'Adam Mann',
    position: (
      <>
        Chief Strategy Officer
        <br />
        Co-Founder
      </>
    ),
    image: {
      src: adam,
      // objectPosition: '0% 50%',
    },
  },
  {
    name: 'Linus Inderbitzin',
    position: 'Chief Technology Officer',
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
    position: 'Designer',
    image: {
      src: walid,
      // objectPosition: '50% 30%',
    },
  },
  {
    name: 'Melanie Guenthardt',
    position: 'Marketing & Liaison Director',
    image: {
      src: melanie,
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
    name: 'Gabriel Novotny',
    position: 'Full Stack Dev',
    image: {
      src: gabriel,
    },
  },
  {
    name: 'Deniz Gez',
    position: 'Brand Curator',
    image: {
      src: gez,
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
        Scale-Up & AI Advisor
        <br />
        VR artdeal
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
        CEO Apricum Circle AG
        <br />
        VR artdeal
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
      src: richard,
    },
  },
]
export const artAdvisors: Member[] = [
  {
    name: (
      <>
        HRH Shaikh Rashid bin Khalifa
        <br />
        Al Khalifa
      </>
    ),
    position: 'Artist / Collector',
    image: {
      alt: 'Shaikh Rashid bin Khalifa',
      src: rachid,
    },
  },
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
