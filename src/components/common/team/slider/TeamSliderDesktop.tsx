import React, { FC, PropsWithChildren } from 'react'

import cn from 'clsx'
import { m } from 'framer-motion'

import { CustomSliderProps } from './TeamSlider'
import s from './TeamSlider.module.css'

const TeamSliderRow: FC<PropsWithChildren> = ({ children }) => {

  return (
    <>
      <m.div
        className={s.sliderRow}
        variants={{
          visible: {
            opacity: 1,
            transition: {
              duration: 1,
              ease: 'easeInOut',
            },
          },
          hidden: {
            opacity: 0,
            transition: {
              // duration: 1,
              ease: 'easeInOut',
            },
          },
        }}
        initial={'hidden'}
        animate={'visible'}
      >
        {children}
      </m.div>
    </>
  )
}

const TeamSliderDesktop: React.FC<CustomSliderProps> = ({ children, className = '', sliderClassName = '' }) => {
  return (
    <div className={cn(s.root, className)}>
      <div className={cn(s.slider, sliderClassName)}>
        <TeamSliderRow>{children}</TeamSliderRow>
      </div>
    </div>
  )
}

export default TeamSliderDesktop
