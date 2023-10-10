import React, { MutableRefObject, useRef, useState } from 'react'

import clsx from 'clsx'

import { useIsHome, useMediaQuery } from '@/lib/hooks'
import { down } from '@/lib/utils'

const Bg = () => {
  const introVideoRef = useRef<HTMLVideoElement>() as MutableRefObject<HTMLVideoElement>
  const introVideoMobileRef = useRef<HTMLVideoElement>() as MutableRefObject<HTMLVideoElement>
  const loopVideoRef = useRef<HTMLVideoElement>() as MutableRefObject<HTMLVideoElement>
  const loopVideoMobileRef = useRef<HTMLVideoElement>() as MutableRefObject<HTMLVideoElement>
  const isHome = useIsHome()

  const [introComplete, setIntroComplete] = useState(false)

  const isSmall = useMediaQuery(down('lg'))

  return (
    <div
      className={clsx(
        'fixed w-full h-full inset-0 blur-0 transition-[filter] duration-1000 pointer-events-none will-change-[filter] overflow-hidden',
        {
          // '!blur-md': !(step === 'intro' || step === 'welcome'),
        }
      )}
    >
      <div className='relative w-full h-full'>
        <video
          ref={loopVideoRef}
          // className='absolute left-0 bottom-0 lg:top-0 lg:object-cover lg:object-center w-full lg:h-full'
          className={clsx(
            'absolute inset-0 object-cover object-center w-full h-full -lg:hidden transition-opacity duration-1000',
            {
              '-lg:!opacity-30': !isHome,
            }
          )}
          // className='absolute left-0 bottom-0 lg:top-0 object-cover object-center w-full lg:w-full lg:h-full'
          preload='auto'
          muted
          loop
          playsInline
        >
          <source
            src={'/videos/loop.mp4'}
            type='video/mp4'
          />
        </video>
        <video
          ref={loopVideoMobileRef}
          // className='absolute left-0 bottom-0 lg:top-0 lg:object-cover lg:object-center w-full lg:h-full'
          className={clsx(
            'absolute inset-0 object-cover object-center w-full h-full lg:hidden transition-opacity duration-1000',
            {
              '-lg:!opacity-30': !isHome,
            }
          )}
          // className='absolute left-0 bottom-0 lg:top-0 object-cover object-center w-full lg:w-full lg:h-full'
          preload='auto'
          muted
          loop
          playsInline
        >
          <source
            src={'/videos/loop_mobile.mp4'}
            type='video/mp4'
          />
        </video>
        <video
          ref={introVideoRef}
          className={clsx('absolute inset-0 object-cover object-center w-full h-full -lg:hidden', {
            hidden: introComplete,
            '-lg:!opacity-30': !isHome,
          })}
          preload='auto'
          autoPlay
          muted
          playsInline
          onEnded={async () => {
            if (!isSmall) {
              await loopVideoRef.current.play()
              setIntroComplete(true)
            }
          }}
        >
          <source
            src={'/videos/intro.mp4'}
            type='video/mp4'
          />
        </video>
        <video
          ref={introVideoMobileRef}
          className={clsx('absolute inset-0 object-cover object-center w-full h-full lg:hidden', {
            hidden: introComplete,
            '-lg:!opacity-30': !isHome,
          })}
          preload='auto'
          autoPlay
          muted
          playsInline
          onEnded={async () => {
            if (isSmall) {
              await loopVideoMobileRef.current.play()
              setIntroComplete(true)
            }
          }}
        >
          <source
            src={'/videos/intro_mobile.mp4'}
            type='video/mp4'
          />
        </video>
      </div>
    </div>
  )
}

export default Bg
