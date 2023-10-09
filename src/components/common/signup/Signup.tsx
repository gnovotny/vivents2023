import React, { FC, useRef, MutableRefObject } from 'react'

import cn from 'clsx'

import { useEscapeKeyHandler, useIsHome } from '@/lib/hooks'

import s from './Signup.module.css'
import Drawer from '@/components/common/drawer'

type MenuProps = {
  className?: string
  open?: boolean
  onClose: () => void
}

const Signup: FC<MenuProps> = ({ open, onClose }) => {
  const ref = useRef() as MutableRefObject<HTMLDivElement>

  // useEscapeKeyHandler(open, onClose)


  return (
      <Drawer
        isOpen={open}
        onClose={onClose}
        title='Join the community for updates, events and WEB3 launches.'
      >
        <div className='flex h-full flex-col lg:pr-[1.1rem]'>
          {/*<div className='-lg:hidden'>
            <h4 className='mb-3 lg:mb-4 font-medium uppercase'>Lifetime Sculptures</h4>
          </div>*/}
          <div className='text-base font-light uppercase leading-none tracking-wider text-zinc-800 lg:hidden'>
            Remembering that we should
            <br />
            make the most of the time we
            <br />
            have is the common idea of
            <br />
            my lifetime sculptures.
          </div>

          <div className='flex flex-col -lg:gap-3 -lg:pt-3'>
            ASDFSASF
          </div>
        </div>
      </Drawer>
  )
}

export default Signup
