import { Dispatch, Fragment, ReactNode, SetStateAction } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Button from '../button'

type DrawerProps = {
  title?: string
  description?: string
  children: ReactNode
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export default function Drawer({
  title = '',
  description = '',
  children,
  isOpen,
  setIsOpen
}: DrawerProps) {
  return (
    <Transition
      show={isOpen}
      as={Fragment}
    >
      <Dialog
        unmount={false}
        onClose={() => setIsOpen(false)}
        as='div'
        className='relative z-30'
        // className='fixed inset-0 z-30 overflow-y-auto'
      >
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter='transition ease-in-out duration-300 transform'
            enterFrom='translate-x-full'
            enterTo='translate-x-0'
            leave='transition ease-in-out duration-300 transform'
            leaveFrom='translate-x-0'
            leaveTo='translate-x-full'
          >
            <div className='fixed inset-0 overflow-y-auto'>
            <div
              className={`flex w-full max-w-sm flex-col
                          justify-between overflow-hidden rounded-r-2xl bg-gray-500 p-6
                          text-left align-middle shadow-xl`}
            >
              <div>
                <Dialog.Title className='text-2xl font-bold text-blue-500 md:text-4xl'>
                  {title}
                </Dialog.Title>
                <Dialog.Description>{description}</Dialog.Description>
                {children}
              </div>
              <div className='mt-10 self-center'>
                <Button onClick={() => setIsOpen(!isOpen)}>Close</Button>
              </div>
            </div>
            </div>
          </Transition.Child>
      </Dialog>
    </Transition>
  )
}
