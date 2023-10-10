import React, { FC, PropsWithChildren, useState } from 'react'

import cn from 'clsx'
import { m } from 'framer-motion'
import { useRouter } from 'next/router'
import useMeasure from 'react-use-measure'

import { useMediaQuery } from '@/lib/hooks/useMediaQuery'
import { down } from '@/lib/utils'

import TeamCard, { TeamCardSliderItemLabel } from './card'
import { advisors, artAdvisors, coreMembers } from './data'
import TeamSlider from './slider'
import TeamSliderDesktop from './slider/TeamSliderDesktop'
import { Member } from './types'

const TeamGroupHeading: FC<PropsWithChildren> = ({ children }) => (
  <div
    className='flex flex-row items-center text-lg font-bold md:text-2xl'
    role='button'
    tabIndex={0}
  >
    {children}
  </div>
)

type TeamGroupProps = {
  id: string
  heading: React.ReactNode | string
  members: Member[]
  teamCardClassName?: string
  sliderClassName?: string
  groupClassName?: string
  chunkSize?: number
  expanded?: boolean
}

const TeamGroup: FC<TeamGroupProps> = ({
  id,
  heading,
  members,
  teamCardClassName,
  sliderClassName,
  groupClassName,
  chunkSize = 9,
}) => {
  const isSmall = useMediaQuery(down('lg'))
  const isVerySmall = useMediaQuery(down('md'))
  const router = useRouter()

  const [ref, { height: viewHeight }] = useMeasure()



  return (
    <div className={cn('py-2 md:py-0 border-accent-2 border-b md:border-none', groupClassName)}>
      <TeamGroupHeading>{heading}</TeamGroupHeading>
      <m.div
        className='-mx-6 overflow-hidden lg:mx-0'
        transition={{
          duration: 0.15,
          ease: 'easeIn' /*[0.04, 0.62, 0.23, 0.98]*/,
        }}
        variants={{
          open: {
            opacity: 1,
            height: viewHeight,
          },
          collapsed: {
            opacity: 0,
            height: 0,
          },
        }}
        initial={'collapsed'}
        animate={'open'}
      >
        <div
          ref={ref}
          className='pt-2 overflow-hidden md:pb-12'
        >
          {!isSmall ? (
            <TeamSliderDesktop
              key={`${id}-members-slider-desktop`}
              type='team'
              sliderClassName={sliderClassName}
              chunkSize={chunkSize}
            >
              {[...Array(7).keys()].map((index) => (
                <TeamCard
                  key={`${id}-members-card-${index}-desktop`}
                  index={index}
                  member={members[index]}
                  imgProps={{
                    width: 480,
                    height: 680,
                  }}
                  className={teamCardClassName}
                />
              ))}
            </TeamSliderDesktop>
          ) : (
            <TeamSlider
              key={`${id}-members-slider`}
              type='team'
              labelFn={isVerySmall ? TeamCardSliderItemLabel : undefined}
              sliderClassName={sliderClassName}
            >
              {members.map((member, i) => (
                <TeamCard
                  key={`${id}-members-card-${i}`}
                  index={i}
                  member={member}
                  imgProps={{
                    width: 480,
                    height: 680,
                  }}
                  className={teamCardClassName}
                />
              ))}
            </TeamSlider>
          )}
        </div>
      </m.div>
    </div>
  )
}

type TeamsProps = {
  expanded?: boolean
}

const Teams: FC<TeamsProps> = (props) => {
  return (
    <div className='flex flex-col'>
      <TeamGroup
        {...props}
        id='core'
        heading='Team'
        members={coreMembers}
        // groupClassName='border-t'
      />
      <TeamGroup
        {...props}
        id='advisors'
        heading='Advisory Board'
        members={advisors}
      />
      <TeamGroup
        {...props}
        id='art-advisors'
        heading='Art Advisory Board'
        members={artAdvisors}
      />
    </div>
  )
}

export default Teams
