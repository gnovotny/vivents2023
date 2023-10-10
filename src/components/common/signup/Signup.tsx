import React, { FC, useRef, MutableRefObject, useState } from 'react'

import { SubmitHandler, useForm } from 'react-hook-form'

import Drawer from '@/components/common/drawer'
import ArrowSVG from '@/components/icons/arrow-right-short.svg'
import { Button } from '@/components/ui'

type MenuProps = {
  className?: string
  open?: boolean
  onClose: () => void
}

const Signup: FC<MenuProps> = ({ open, onClose }) => {
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
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className='flex flex-row items-end h-full pt-10 gap-3'>
          <div className='w-full'>
            {/*<label
            htmlFor='email'
            className={'block text-xs font-medium uppercase text-primary'}
          >
            Email
          </label>*/}
            <input
              type='email'
              id='email'
              autoComplete='email'
              placeholder='YOUR@EMAIL.COM'
              required
              //
              className='block w-full p-2 lg:p-4 text-xs lg:text-sm uppercase bg-transparent border !h-8 lg:!h-12 rounded-lg lg:rounded-xl border-primary focus:border-primary focus:ring-primary focus-visible:outline-tertiary'
              {...methods.register('email', {
                required: 'This field is required',
              })}
            />
          </div>
          <div>
            <Button type='submit' className='pl-5 pr-3 lg:pl-10 lg:pr-6 lg:min-w-[6rem] rounded-lg lg:rounded-xl !h-8 lg:!h-12 !text-xs lg:!text-base'>
              send <ArrowSVG className='inline-block w-3 lg:w-3 h-auto ml-1 lg:ml-3' />
            </Button>
          </div>
        </div>
      </form>
    </Drawer>
  )
}

export default Signup
