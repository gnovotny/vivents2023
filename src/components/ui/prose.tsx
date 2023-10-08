import type { FunctionComponent } from 'react'

import clsx from 'clsx'

import Text from './text'

interface ProseProps {
  html: string
  className?: string
}

const Prose: FunctionComponent<ProseProps> = ({ html, className }) => {
  return (
    <Text className={clsx('whitespace-pre-line', className)}>
      <span dangerouslySetInnerHTML={{ __html: html as string }} />
    </Text>
  )
}

export default Prose
