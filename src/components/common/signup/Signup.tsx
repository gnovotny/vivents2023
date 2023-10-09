import React, { FC, useRef, MutableRefObject } from 'react'

import cn from 'clsx'

import { useEscapeKeyHandler, useIsHome } from '@/lib/hooks'

import s from './Signup.module.css'

type MenuProps = {
  className?: string
  open?: boolean
  onClose: () => void
}

const Signup: FC<MenuProps> = ({ open, onClose }) => {
  const ref = useRef() as MutableRefObject<HTMLDivElement>

  useEscapeKeyHandler(open, onClose)

  const isHome = useIsHome()

  return (
    <div className={cn(s.root, { [s.open]: open })}>
      <nav
        className={s.nav}
        role='menu'
        ref={ref}
        onWheel={(event) => event.stopPropagation()} // don't propagate to lenis
        onScroll={(event) => event.stopPropagation()} // don't propagate to lenis
        onTouchStart={(event) => event.stopPropagation()} // don't propagate to lenis
        onTouchEnd={(event) => event.stopPropagation()} // don't propagate to lenis
        onTouchMove={(event) => event.stopPropagation()} // don't propagate to lenis
      >
        <div className={cn(s.main)}>
          ASDFASDF
        </div>
      </nav>
    </div>
  )
}

export default Signup
