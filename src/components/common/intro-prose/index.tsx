import type { FunctionComponent } from 'react'

import clsx from 'clsx'

import { Text } from '@/components/ui'
import { useIsHome, useMediaQuery } from '@/lib/hooks'
import useFlickerReveal from '@/lib/hooks/useFlickerReveal'
import { useStore } from '@/lib/store'
import { down } from '@/lib/utils'
import { useEffect } from 'react'

interface IntroProseProps {
  className?: string
  animateOnce?: boolean
}

const textClassName = '-lg:text-[0.8rem]'

const IntroProse: FunctionComponent<IntroProseProps> = ({ className, animateOnce = false }) => {
  const { finishIntroProse, introVideoComplete, introProseComplete } = useStore()
  const isHome = useIsHome()
  // const isSmall = useMediaQuery(down('lg'))
  const ref = useFlickerReveal({
    // flickerFrames: 115,
    active: !introProseComplete && introVideoComplete && isHome,
    childNodes: true,
    childStagger: `>-0.5`,
    stDuration: 0.14,
    stStagger: 0.0075,
    onComplete: finishIntroProse,
    once: animateOnce,
    // delay: !isHome && !isSmall ? 1 : 0,
  })

  useEffect(() => {
    if (!isHome && !introProseComplete) {
      finishIntroProse()
    }
  }, [finishIntroProse, introProseComplete, isHome])

  return (
    <div
      ref={ref}
      className={clsx('transition-opacity duration-300', {
        'opacity-0': isHome && !introVideoComplete && !introProseComplete,
      })}
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
