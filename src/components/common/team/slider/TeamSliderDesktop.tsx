import React, { FC, PropsWithChildren } from 'react'

import cn from 'clsx'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import { CustomSliderProps } from './TeamSlider'
import s from './TeamSlider.module.css'

const TeamSliderRow: FC<PropsWithChildren> = ({ children }) => {
  const [topRef, topInView] = useInView({ triggerOnce: true, threshold: 1 })

  return (
    <>
      <div
        className='absolute inset-0 w-full h-[3rem]'
        ref={topRef}
      />
      <motion.div
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
        animate={topInView ? 'visible' : 'hidden'}
      >
        {children}
      </motion.div>
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
