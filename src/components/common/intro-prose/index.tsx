import type { FunctionComponent } from 'react'

import { Prose } from '@/components/ui'

interface IntroProseProps {
  className?: string
}

const IntroProse: FunctionComponent<IntroProseProps> = ({ className }) => {
  return (
    <>
      <Prose
        className=''
        html={`Vivents champions tech and design innovations, transforming both customer experiences and business landscapes using the next internet generation (WEB3). 

                By leveraging pioneering strategies, phygital products, community principles and Blockchain technology, we ensure our clients stay competitive and ahead in their fields.
                
                Vivents is redefining business at the intersection of art, luxury, and technology.`}
      />
      <Prose
        className='hidden lg:block'
        html={`
        We are your essential partner for magnifying Web3 projects and connecting you to the new economy.`}
      />
    </>
  )
}

export default IntroProse
