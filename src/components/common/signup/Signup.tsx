import React, { FC, useState } from 'react'

import clsx from 'clsx'
import { SubmitHandler, useForm } from 'react-hook-form'

import ArrowSVG from '@/components/icons/arrow-right-short.svg'
import { Button } from '@/components/ui'

type SignupProps = {
  className?: string
  onSubmit?: () => void
}

const Signup: FC<SignupProps> = ({ onSubmit: parentOnSubmit, className }) => {
  const methods = useForm()

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

        parentOnSubmit?.()
      }
    } catch (e) {
      // setMessageIsOpen(true)
      setIsJoining(false)
    }
  }

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      <div className={clsx('flex flex-row items-end h-full gap-3', className)}>
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
          className='block w-full p-2 text-xs uppercase bg-transparent border rounded-lg lg:p-4 lg:text-sm !h-8 lg:!h-12 lg:rounded-xl border-primary focus:border-primary focus:ring-primary focus-visible:outline-tertiary'
          {...methods.register('email', {
            required: 'This field is required',
          })}
        />
        <Button
          type='submit'
          className='pl-5 pr-3 rounded-lg lg:pl-10 lg:pr-6 lg:min-w-[6rem] lg:rounded-xl !h-8 lg:!h-12 !text-xs lg:!text-base whitespace-nowrap'
          disabled={isJoining}
        >
          signup <ArrowSVG className='inline-block h-auto ml-1 w-[0.6rem] lg:w-3 lg:ml-3' />
        </Button>
      </div>
    </form>
  )
}

export default Signup
