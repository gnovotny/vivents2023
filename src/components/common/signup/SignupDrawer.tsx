import React, { FC, useRef, MutableRefObject, useState } from 'react'

import clsx from 'clsx'
import { SubmitHandler, useForm } from 'react-hook-form'

import Drawer from '@/components/common/drawer'
import Signup from '@/components/common/signup/Signup'

type SignupDrawerProps = {
  className?: string
  open?: boolean
  onClose: () => void
}

const SignupDrawer: FC<SignupDrawerProps> = ({ open, onClose, className }) => {
  const ref = useRef() as MutableRefObject<HTMLDivElement>

  // useEscapeKeyHandler(open, onClose)

  const methods = useForm()

  const { watch, setValue, getValues } = methods

  const [isJoining, setIsJoining] = useState(false)

  const onSubmit: SubmitHandler<any> = async (data) => {
    if (isJoining) return

    try {
      const isValid = true

      if (isValid) {
        // setIsJoining(true)
        // await fetch('/api/signup', {
        //   method: 'POST',
        //   body: JSON.stringify({
        //     ...getValues(),
        //   }),
        //   headers: {
        //     'content-type': 'application/json',
        //   },
        // })
        //   // await timeout(500)
        //   .then((response) => {
        //     const data = response.json()
        //     if (response.ok) {
        //       return data
        //     }
        //     throw new Error('Something went wrong')
        //   })
        //   .then((res) => {
        //     setIsJoining(false)
        //   })
        //   .catch((e) => {
        //     console.log(e)
        //     throw new Error(e.toString())
        //   })

        onClose()
      }
    } catch (e) {
      // setMessageIsOpen(true)
      setIsJoining(false)
    }
  }

  return (
    <Drawer
      isOpen={open}
      onClose={onClose}
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
