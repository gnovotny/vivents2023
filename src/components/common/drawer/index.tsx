import { Fragment, ReactNode } from 'react'

import { Dialog, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'

import XSVG from '@/components/icons/x.svg'

type DrawerProps = {
  title?: string
  description?: string
  children: ReactNode
  isOpen?: boolean
  blurOverlay?: boolean
  onClose: () => void
}

const overlayTransitionProps = {
  enter: '-lg:transition-[backdrop-filter] -lg:will-change-[backdrop-filter] -lg:duration-700 ',
  enterFrom: '-lg:backdrop-blur-0 ',
  enterTo: '-lg:backdrop-blur-md',
  leave: '-lg:transition-[backdrop-filter] -lg:will-change-[backdrop-filter] -lg:duration-700',
  leaveFrom: '-lg:backdrop-blur-md',
  leaveTo: '-lg:backdrop-blur-0',
}

export default function Drawer({ title = '', description = '', children, isOpen, onClose, blurOverlay }: DrawerProps) {
  const pathname = usePathname()

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
        <Transition.Child
          as={Fragment}
          {...(pathname === '/company' ? overlayTransitionProps : {})}
        >
          <Dialog.Overlay
            className={clsx('relative flex flex-col justify-end w-full h-full lg:justify-center lg:items-center')}
          >
            <div className='flex w-full lg:max-w-2xl'>
              <Transition.Child
                as={Fragment}
                enter='transform transition ease-in-out duration-700 '
                // enterFrom='opacity-0 -lg:translate-y-full'
                // enterTo='opacity-100 -lg:translate-y-0'
                // leave='transform transition ease-in-out duration-700'
                // leaveFrom='opacity-100 -lg:translate-y-0'
                // leaveTo='opacity-0 -lg:translate-y-full'
                enterFrom='opacity-0 '
                enterTo='opacity-100 '
                leave='transform transition ease-in-out duration-700'
                leaveFrom='opacity-100 '
                leaveTo='opacity-0'
              >
                <div className='w-full'>
                  <div className='flex flex-col h-full bg-white shadow-xl'>
                    <div className='px-4 pt-4 lg:pt-6 lg:px-6'>
                      <div className='flex items-start justify-between'>
                        <div></div>
                        <div className=''>
                          <button
                            type='button'
                            className='bg-none text-primary focus:outline-none focus:ring-transparent'
                            onClick={() => onClose()}
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
                    <div className='flex flex-col min-h-0 px-8 pb-8 lg:px-14 lg:pb-10'>
                      <Dialog.Title className='text-xs uppercase lg:text-[0.8rem] leading-[1.2] lg:leading-[1.1] max-w-[70%] lg:max-w-xs'>
                        {title}
                      </Dialog.Title>
                      <div className='relative flex-1'>{children}</div>
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog.Overlay>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  )
}
