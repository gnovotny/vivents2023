import React, { MutableRefObject, useEffect, useRef, useState } from 'react'

import clsx from 'clsx'

import { useIsHome } from '@/lib/hooks'
import { useStore } from '@/lib/store'

const Bg = () => {
  const rootRef = useRef<HTMLDivElement>(null)
  const introVideoRef = useRef<HTMLVideoElement>() as MutableRefObject<HTMLVideoElement>
  // const introVideoMobileRef = useRef<HTMLVideoElement>() as MutableRefObject<HTMLVideoElement>
  const loopVideoRef = useRef<HTMLVideoElement>() as MutableRefObject<HTMLVideoElement>
  // const loopVideoMobileRef = useRef<HTMLVideoElement>() as MutableRefObject<HTMLVideoElement>
  const isHome = useIsHome()

  const { finishIntroVideo, introVideoComplete } = useStore()

  const [introVideoPlaying, setIntroVideoPlaying] = useState(false)
  const [realIntroVideoComplete, setRealIntroVideoComplete] = useState(false)

  // const isSmall = useMediaQuery(down('lg'))

  useEffect(() => {
    const video = introVideoRef.current
    if (!video) return
    // video.addEventListener("timeupdate", updateCountdown, true);

    let checkRemainingInterval: NodeJS.Timer | undefined = setInterval(() => {
      const timeLeft = video.duration - video.currentTime
      if (timeLeft < 6) {
        clearInterval(checkRemainingInterval)
        checkRemainingInterval = undefined

        finishIntroVideo()
      }
    }, 500)

    return () => {
      if (checkRemainingInterval) {
        clearInterval(checkRemainingInterval)
        checkRemainingInterval = undefined
      }
    }
  }, [])

  useEffect(() => {
    if (!isHome && !introVideoComplete) {
      finishIntroVideo()
    }
  }, [isHome, introVideoComplete, finishIntroVideo])

  // useEffect(() => {
  //   if ((!introVideoPlaying && !realIntroVideoComplete) || !rootRef.current) return
  //
  //   const flickerTl = flicker(rootRef.current, realIntroVideoComplete ? 15 : 30)
  //
  //   return () => {
  //     flickerTl.kill()
  //   }
  // }, [introVideoPlaying, realIntroVideoComplete])

  return (
    <div
      ref={rootRef}
      className={clsx(
        'fixed w-full h-full inset-0 pointer-events-none overflow-hidden transition-opacity duration-700',
        {
          'opacity-0': !introVideoPlaying,
        }
      )}
    >
      <div className='relative w-full h-full'>
        <video
          ref={introVideoRef}
          className={clsx(
            'absolute z-10 inset-0 object-cover object-center w-full h-full',
            // ' -lg:hidden',
            {
              hidden: realIntroVideoComplete,
              '-lg:!opacity-30': !isHome,
            }
          )}
          preload='auto'
          autoPlay
          muted
          playsInline
          onPlaying={() => {
            setIntroVideoPlaying(true)
          }}
          onEnded={async () => {
            await loopVideoRef.current.play()
            // finishIntro()
            setRealIntroVideoComplete(true)
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

export default Bg
