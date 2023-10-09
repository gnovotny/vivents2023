import { Dispatch, Fragment, ReactNode, SetStateAction } from 'react'

import { Dialog, Transition } from '@headlessui/react'

import XSVG from '@/components/icons/x.svg'

type DrawerProps = {
  title?: string
  description?: string
  children: ReactNode
  isOpen: boolean
  onClose: Dispatch<SetStateAction<boolean>>
}

export default function Drawer({ title = '', description = '', children, isOpen, onClose }: DrawerProps) {
  return (
    <Transition.Root
      show={isOpen}
      as={Fragment}
    >
      <Dialog
        as='div'
        className='fixed inset-0 z-20 overflow-hidden'
        onClose={onClose}
      >
        <Dialog.Overlay className='relative flex flex-col justify-end w-full h-full lg:justify-center lg:items-center'>
          <div className='flex w-full lg:w-auto'>
            <Transition.Child
              as={Fragment}
              enter='transform transition ease-in-out duration-500 sm:duration-500'
              enterFrom='opacity-0 -lg:translate-y-full'
              enterTo='opacity-100 -lg:translate-y-0'
              leave='transform transition ease-in-out duration-500 sm:duration-500'
              leaveFrom='opacity-100 -lg:translate-y-0'
              leaveTo='opacity-0 -lg:translate-y-full'
            >
              <div className='w-full'>
                <div className='flex flex-col h-full bg-white shadow-xl'>
                  <div className='p-4 lg:px-6 lg:py-0 lg:pt-[8rem]'>
                    <div className='flex items-start justify-between'>
                      <div>
                        <Dialog.Title className='text-sm uppercase leading-[1.05]'>{title}</Dialog.Title>
                      </div>
                      <div className=''>
                        <button
                          type='button'
                          className='bg-none text-primary focus:outline-none focus:ring-transparent'
                          onClick={() => onClose(false)}
                        >
                          <span className='sr-only'>Close panel</span>
                          <XSVG
                            className='w-4 h-auto'
                            aria-hidden='true'
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col flex-1 min-h-0 overflow-y-auto'>
                    <div className='relative flex-1 p-4 lg:mt-6 lg:px-16 lg:pb-4 lg:pt-0'>{children}</div>
                  </div>
                  {/*<div className='flex flex-shrink-0 justify-end px-4 py-4'>*/}
                  {/*  <button*/}
                  {/*    type='button'*/}
                  {/*    className='rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'*/}
                  {/*    onClick={() => onClose(false)}*/}
                  {/*  >*/}
                  {/*    Cancel*/}
                  {/*  </button>*/}
                  {/*  <button*/}
                  {/*    type='submit'*/}
                  {/*    className='ml-4 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'*/}
                  {/*  >*/}
                  {/*    Save*/}
                  {/*  </button>*/}
                  {/*</div>*/}
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog.Overlay>
      </Dialog>
    </Transition.Root>
  )
}
