import React, { ReactNode } from 'react'

import { ImageProps } from 'next/image'

import adam from '@/assets/media/team/adam.jpg'
import ilija from '@/assets/media/team/ilija.jpg'
import jacco from '@/assets/media/team/jacco.jpg'
import gabriel from '@/assets/media/team/gabriel.jpg'
import linus from '@/assets/media/team/linus.jpg'
import gez from '@/assets/media/team/gez.png'
import melanie from '@/assets/media/team/melanie.png'
import sarah from '@/assets/media/team/sarah.jpg'
import walid from '@/assets/media/team/walid.jpg'

export type Member = {
  name?: ReactNode | string
  position?: ReactNode | string
  image?: Omit<ImageProps, 'alt'>
}

const members: Member[] = [
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

export default members
