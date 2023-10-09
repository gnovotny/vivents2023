import type { FunctionComponent, PropsWithChildren } from 'react'

import clsx from 'clsx'

type TitleProps = PropsWithChildren<{
  className?: string
}>

const Title: FunctionComponent<TitleProps> = ({ children, className }) => {
  return <div className={clsx('uppercase text-sm leading-[1.05] text-[#d0d0d0] tracking-[-0.01em]', className)}>[{children}]</div>
}

export default Title