import React from 'react'

import ContactButton from '@/components/common/contact-button'
import { Text, Title } from '@/components/ui'
import { useMediaQuery } from '@/lib/hooks'
import useFlickerReveal from '@/lib/hooks/useFlickerReveal'
import { useStore } from '@/lib/store'
import { down } from '@/lib/utils'

const AppPage = () => {
  const { introProseComplete } = useStore()
  const isSmall = useMediaQuery(down('lg'))
  const textRef = useFlickerReveal({
    // flickerFrames: 115,
    active: introProseComplete || isSmall,
    childNodes: true,
    childStagger: '>0.3',
    stDuration: 0.14,
    stStagger: 0.0075,
    delay: isSmall ? 1 : 0,
    // onComplete: ,
  })

  const buttonsRef = useFlickerReveal({
    active: introProseComplete || isSmall,
    delay: isSmall ? 1.5 : 0.5,
    split: false,
  })

  return (
    <div className='flex flex-col items-end justify-between w-full h-full'>
      <div className='flex flex-col w-full'>
        <div
          ref={textRef}
          className='opacity-0'
        >
          <Text>
            The VIVENTS Marketplace is a gamechanger in social e-commerce, specializing in Trading art, luxury, fashion,
            and digital collectibles. We connect today's and tomorrow's most sought-after sellers and buyers.
            <br />
            <br />
          </Text>
          <Text>
            VIVENTS empowers social interactions and offers a suite of tools that increase operational transparency and
            efficiency while scaling your community. We're not just another platform; we're redefining value exchange
            and access.
          </Text>
        </div>

        <div
          ref={buttonsRef}
          className='flex flex-col opacity-0 gap-3 pt-common'
        >
          <Title>Available on</Title>
          <div className='flex flex-row items-center gap-2 '>
            <a
              href='https://apps.apple.com/us/app/vivents/id1598350812'
              target='_blank'
              rel='noopener noreferrer'
              className='cursor-pointer'
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src='/images/app/apple-store.svg'
                alt='apple-store'
                className='w-auto h-[40px]'
              />
            </a>
            <a
              href='https://play.google.com/store/apps/details?id=ai.artdeal'
              className='cursor-pointer'
              target='_blank'
              rel='noopener noreferrer'
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src='/images/app/google-store.svg'
                alt='google-store'
                className='w-auto h-[40px]'
              />
            </a>
          </div>
        </div>
      </div>
      <ContactButton className='hidden lg:inline-flex' />
    </div>
  )
}

export default AppPage
