import React, { MutableRefObject, useRef } from 'react'

import clsx from 'clsx'

import { useIsHome, useMediaQuery } from '@/lib/hooks'
import { useStore } from '@/lib/store'
import { down } from '@/lib/utils'

const BgOld = () => {
  const introVideoRef = useRef<HTMLVideoElement>() as MutableRefObject<HTMLVideoElement>
  // const introVideoMobileRef = useRef<HTMLVideoElement>() as MutableRefObject<HTMLVideoElement>
  const loopVideoRef = useRef<HTMLVideoElement>() as MutableRefObject<HTMLVideoElement>
  // const loopVideoMobileRef = useRef<HTMLVideoElement>() as MutableRefObject<HTMLVideoElement>
  const isHome = useIsHome()

  const { introComplete, finishIntro } = useStore()

  // const isSmall = useMediaQuery(down('lg'))

  return (
    <div className={clsx('fixed w-full h-full inset-0 pointer-events-none overflow-hidden')}>
      <div className='relative w-full h-full'>
        <video
          ref={introVideoRef}
          className={clsx(
            'absolute z-10 inset-0 object-cover object-center w-full h-full',
            // ' -lg:hidden',
            {
              hidden: introComplete,
              '-lg:!opacity-30': !isHome,
            }
          )}
          preload='auto'
          autoPlay
          muted
          playsInline
          onEnded={async () => {
            await loopVideoRef.current.play()
            finishIntro()
          }}
        >
          <source
            src={'/videos/intro.mp4'}
            type='video/mp4'
          />
        </video>
        {/*<video*/}
        {/*  ref={introVideoRef}*/}
        {/*  className={clsx('absolute z-10 inset-0 object-cover object-center w-full h-full lg:hidden', {*/}
        {/*    hidden: introComplete,*/}
        {/*    '-lg:!opacity-30': !isHome,*/}
        {/*  })}*/}
        {/*  preload='auto'*/}
        {/*  autoPlay*/}
        {/*  muted*/}
        {/*  playsInline*/}
        {/*  onEnded={async () => {*/}
        {/*    await loopVideoMobileRef.current.play()*/}
        {/*    finishIntro()*/}
        {/*  }}*/}
        {/*>*/}
        {/*  <source*/}
        {/*    src={'/videos/intro_mobile.mp4'}*/}
        {/*    type='video/mp4'*/}
        {/*  />*/}
        {/*</video>*/}
        <video
          ref={loopVideoRef}
          // className='absolute left-0 bottom-0 lg:top-0 lg:object-cover lg:object-center w-full lg:h-full'
          className={clsx(
            'absolute inset-0 object-cover object-center w-full h-full',
            // ' -lg:hidden',
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
        {/*<video*/}
        {/*  ref={loopVideoMobileRef}*/}
        {/*  className={clsx(*/}
        {/*    'absolute inset-0 object-cover object-center w-full h-full lg:hidden transition-opacity duration-1000',*/}
        {/*    {*/}
        {/*      '-lg:!opacity-30': !isHome,*/}
        {/*    }*/}
        {/*  )}*/}
        {/*  preload='auto'*/}
        {/*  muted*/}
        {/*  loop*/}
        {/*  playsInline*/}
        {/*>*/}
        {/*  <source*/}
        {/*    src={'/videos/loop_mobile.mp4'}*/}
        {/*    type='video/mp4'*/}
        {/*  />*/}
        {/*</video>*/}
      </div>
    </div>
  )
}

export default BgOld
