import { ReactNode } from 'react'

import { ImageProps } from 'next/image'

export type Member = {
  name?: ReactNode | string
  position?: ReactNode | string
  image?: Omit<ImageProps, 'alt'>
}
