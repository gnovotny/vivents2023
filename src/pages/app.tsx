import React from 'react'

import { AppProps } from 'next/app'

import ContactButton from '@/components/common/contact-button'
import { Prose } from '@/components/ui'
import Title from '@/components/ui/title'

const AppPage = ({ pageProps }: AppProps) => {
  return (
    <div className='flex flex-col items-end justify-between w-full h-full'>
      <div className='flex flex-col w-full'>
        <Prose
          html={`The VIVENTS Marketplace is a gamechanger in social e-commerce, specializing in Trading art, luxury, fashion, and digital collectibles. We connect today's and tomorrow's most sought-after sellers and buyers.

VIVENTS empowers social interactions and offers a suite of tools that increase operational transparency and efficiency while scaling your community. We're not just another platform; we're redefining value exchange and access.`}
        />
        <div className='flex flex-col gap-3 pt-common'>
          <Title>Available on</Title>
          <div className='flex flex-row items-center gap-2 '>
            <a
              href='https://apps.apple.com/us/app/vivents/id1598350812'
              target='_blank'
              rel='noopener noreferrer'
              className='cursor-pointer'
            >
              <img
                src='/images/app/apple-store.svg'
                alt='apple-store'
                className='w-[120px] lg:w-[150px]'
              />
            </a>
            <a
              href='https://play.google.com/store/apps/details?id=ai.artdeal'
              className='cursor-pointer'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src='/images/app/google-store.svg'
                alt='google-store'
                className='w-[120px] lg:w-[150px]'
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
