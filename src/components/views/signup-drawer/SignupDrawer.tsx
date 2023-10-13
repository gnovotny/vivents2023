import React, { FC } from 'react'

import clsx from 'clsx'

import Drawer from '@/components/common/drawer'
import Signup from '@/components/common/signup'

type SignupDrawerProps = {
  className?: string
  open?: boolean
  blurOverlay?: boolean
  onClose: () => void
}

const SignupDrawer: FC<SignupDrawerProps> = ({ open, onClose, className, blurOverlay }) => {
  return (
    <Drawer
      isOpen={open}
      onClose={onClose}
      blurOverlay={blurOverlay}
      title='Join the community for updates, events and WEB3 launches.'
    >
      <div className={clsx('pt-10')}>
        <Signup
          onSubmit={onClose}
          className={className}
        />
      </div>
    </Drawer>
  )
}

export default SignupDrawer
