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
  const { handleSubmit, register, getValues } = useForm()

  const [isJoining, setIsJoining] = useState(false)
  const [isJoined, setIsJoined] = useState(false)

  const onSubmit: SubmitHandler<any> = async (data) => {
    if (isJoining) return

    try {
      const isValid = true

      if (isValid) {
        setIsJoining(true)
        await fetch('/api/signup', {
          method: 'POST',
          body: JSON.stringify({
            ...getValues(),
          }),
          headers: {
            'content-type': 'application/json',
          },
        })
          // await timeout(500)
          .then((response) => {
            const data = response.json()
            if (response.ok) {
              return data
            }
            throw new Error('Something went wrong')
          })
          .then((res) => {
            setIsJoining(false)
            setIsJoined(true)
            setTimeout(() => parentOnSubmit?.(), 1500)
          })
          .catch((e) => {
            console.log(e)
            throw new Error(e.toString())
          })


      }
    } catch (e) {
      // setMessageIsOpen(true)
      setIsJoining(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={clsx('flex flex-row justify-end items-end h-full gap-3', className)}>
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
          disabled={isJoining}
          //
          className={clsx(
            'block w-full p-2 text-xs uppercase bg-transparent border rounded-lg lg:p-4 lg:text-sm h-common lg:rounded-xl border-primary focus:border-primary focus:ring-primary focus-visible:outline-tertiary',
            {
              hidden: isJoined,
            }
          )}
          {...register('email', {
            required: 'This field is required',
          })}
        />
        {/*<Button*/}
        {/*  type='submit'*/}
        {/*  className='pl-5 pr-3 rounded-lg lg:pl-10 lg:pr-6 lg:min-w-[6rem] lg:rounded-xl !text-xs lg:!text-base whitespace-nowrap'*/}
        {/*  disabled={isJoining || isJoined}*/}
        {/*>*/}
        {/*  signup <ArrowSVG className='inline-block h-auto ml-1 w-[0.6rem] lg:w-3 lg:ml-3' />*/}
        {/*</Button>*/}
        <Button
          className={clsx('lg:!min-w-[8.5rem] lg:px-7 whitespace-nowrap', {
            '!w-full lg:!w-full !opacity-100 hover:!opacity-100 !pointer-events-none': isJoined,
          })}
          disabled={isJoining || isJoined}
        >
          <span className={clsx('animate-pulse', { hidden: !isJoining })}>Please wait</span>
          <span className={clsx({ hidden: isJoined || isJoining })}>Signup</span>
          <span className={clsx({ hidden: !isJoined })}>Thank you!</span>
          <ArrowSVG className={clsx('inline-block w-3 h-auto ml-1', { hidden: isJoined || isJoining })} />
        </Button>
      </div>
    </form>
  )
}

export default Signup
