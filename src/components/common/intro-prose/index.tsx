import type { FunctionComponent } from 'react'

import clsx from 'clsx'

import { Text } from '@/components/ui'
import useFlickerReveal from '@/lib/hooks/useFlickerReveal'
import { useStore } from '@/lib/store'
import { useIsHome, useMediaQuery } from '@/lib/hooks'
import { down } from '@/lib/utils'

interface IntroProseProps {
  className?: string
  animateOnce?: boolean
}

const textClassName = '-lg:text-[0.8rem]'

const IntroProse: FunctionComponent<IntroProseProps> = ({ className, animateOnce = false }) => {
  const { finishIntroProse, introVideoComplete } = useStore()
  const isHome = useIsHome()
  const isSmall = useMediaQuery(down('lg'))
  const ref = useFlickerReveal({
    // flickerFrames: 115,
    active: introVideoComplete || (!isHome && !isSmall),
    childNodes: true,
    stDuration: 0.14,
    stStagger: 0.01,
    onComplete: finishIntroProse,
    once: animateOnce
  })

  return (
    <div
      ref={ref}
      className='opacity-0'
    >
      <Text className={textClassName}>
        Vivents champions tech and design innovations, transforming both customer experiences and business landscapes
        using the next internet generation (WEB3).
        <br />
        <br />
      </Text>
      <Text className={textClassName}>
        By leveraging pioneering strategies, phygital products, community principles and Blockchain technology, we
        ensure our clients stay competitive and ahead in their fields.
        <br />
        <br />
      </Text>
      <Text className={clsx(textClassName, 'hidden lg:block')}>
        Vivents is redefining business at the intersection of art, luxury, and technology.
        <br />
        <br />
      </Text>
      <Text className={clsx(textClassName, 'hidden lg:block')}>
        We are your essential partner for magnifying Web3 projects and connecting you to the new economy.
      </Text>
    </div>
  )
}

export default IntroProse
