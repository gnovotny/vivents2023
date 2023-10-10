import type { FunctionComponent, PropsWithChildren } from 'react'

import clsx from 'clsx'

type ProseProps = PropsWithChildren<{
  className?: string
}>

const Text: FunctionComponent<ProseProps> = ({ children, className }) => {
  return <div className={clsx('thinner uppercase text-sm leading-[1.15rem]', className)}>{children}</div>
}

export default Text
