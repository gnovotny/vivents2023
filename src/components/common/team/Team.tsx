import React, { FC, PropsWithChildren, useState } from 'react'

import cn from 'clsx'
import { m } from 'framer-motion'
import { useRouter } from 'next/router'
import useMeasure from 'react-use-measure'

import { TeamCardSliderItemLabel } from '@/components/common/team/card/TeamCard'
import TeamSliderDesktop from '@/components/common/team/slider/TeamSliderDesktop'
import { useMediaQuery } from '@/lib/hooks/useMediaQuery'
import { down } from '@/lib/utils'

import TeamCard from './card'
import TeamSlider from './slider'
import { Member } from './types'
import members from './members'

type TeamGroupHeadingProps = PropsWithChildren & {
  isActive: boolean
  onClick: () => void
}

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

const Team: FC<TeamGroupProps> = ({
  teamCardClassName,
  sliderClassName,
  groupClassName,
  chunkSize = 9,
  expanded = false,
}) => {
  const isSmall = useMediaQuery(down('lg'))
  const isVerySmall = useMediaQuery(down('md'))
  const router = useRouter()

  const [isActive, setActive] = useState(expanded)
  const [ref, { height: viewHeight }] = useMeasure()

  const toggle = () => setActive((x) => !x)

  return (
    <div className={cn('py-2 md:py-0 border-accent-2 border-b md:border-none', groupClassName)}>
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
        animate={isActive ? 'open' : 'collapsed'}
      >
        <div
          ref={ref}
          className='pt-2 overflow-hidden md:pb-12'
        >
          {!isSmall ? (
            <TeamSliderDesktop
              key={`members-slider-desktop`}
              type='team'
              sliderClassName={sliderClassName}
              chunkSize={chunkSize}
            >
              {[...Array(7).keys()].map((index) => (
                <TeamCard
                  key={`members-card-${index}-desktop`}
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
              key={`members-slider`}
              type='team'
              labelFn={isVerySmall ? TeamCardSliderItemLabel : undefined}
              sliderClassName={sliderClassName}
            >
              {members.map((member, i) => (
                <TeamCard
                  key={`members-card-${i}`}
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

export default Team
