import React, { FC } from 'react'

import cn from 'clsx'
import Image, { ImageProps } from 'next/image'

import { Member } from '../types'

import s from './TeamCard.module.css'

interface TeamCardProps {
  className?: string
  member?: Member
  noNameTag?: boolean
  imgProps?: Omit<ImageProps, 'src' | 'layout' | 'placeholder' | 'blurDataURL' | 'alt'>
  index: number
}

const placeholderImg = '/img-placeholder.svg'

const TeamCard: FC<TeamCardProps> = ({ member, imgProps, className, index }) => {
  const rootClassName = cn(s.root, className)

  return (
    <div className={rootClassName}>
      <div className={s.imageContainer}>
        {member && (
          <Image
            {...member.image}
            alt={member.image?.alt || (member.name as string) || 'Member Image'}
            className={s.memberImage}
            src={member.image?.src || placeholderImg}
            quality='75'
            loading='eager'
            layout='responsive'
            height={533}
            width={400}
          />
        )}
      </div>
      <div className={s.footer}>
        {member && (
          <>
            <div className={s.name}>{member.name}</div>
            <div className={s.position}>{member.position}</div>
          </>
        )}
      </div>
    </div>
  )
}

export const TeamCardSliderItemLabel: FC<TeamCardProps> = ({ member }: TeamCardProps) => {
  return (
    <div className={cn(s.footer, 'h-28 pt-6 lg:py-6')}>
      {member && (
        <>
          <div className={s.name}>{member.name}</div>
          <div className={s.position}>{member.position}</div>
        </>
      )}
    </div>
  )
}

export default TeamCard
