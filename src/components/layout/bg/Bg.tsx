import React, { MutableRefObject, useRef, useState } from 'react'

import clsx from 'clsx'

const Bg = () => {
  const introVideoRef = useRef<HTMLVideoElement>() as MutableRefObject<HTMLVideoElement>
  const loopVideoRef = useRef<HTMLVideoElement>() as MutableRefObject<HTMLVideoElement>

  const [introComplete, setIntroComplete] = useState(false)

  return (
    <div
      className={clsx(
        'fixed w-full h-full inset-0 blur-0 transition-[filter] duration-1000 pointer-events-none will-change-[filter] overflow-hidden',
        {
          // '!blur-md': !(step === 'intro' || step === 'welcome'),
        }
      )}
    >
      <div className='relative h-full w-ful'>
        <video
          ref={loopVideoRef}
          className='absolute inset-0 object-cover object-center w-full h-full'
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
          ref={introVideoRef}
          className={clsx('absolute inset-0 object-cover object-center w-full h-full', {
            hidden: introComplete,
          })}
          preload='auto'
          autoPlay
          muted
          playsInline
          onEnded={async () => {
            await loopVideoRef.current.play()
            setIntroComplete(true)
          }}
        >
          <source
            src={'/videos/intro.mp4'}
            type='video/mp4'
          />
        </video>
      </div>
    </div>
  )
}

export default Bg
