import { Dispatch, Fragment, ReactNode, SetStateAction } from 'react'
import { Dialog, Transition } from '@headlessui/react'

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
      appear
      show={isOpen}
      as={Fragment}
    >
      <Dialog
        // open={true}
        // unmount={false}
        as='div'
        className='relative z-20'
        onClose={() => setIsOpen(false)}
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

        <div className='fixed right-0 top-0 w-full overflow-hidden lg:w-[50vw] xl:w-[30vw]'>
          <div className='flex min-h-full text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='translate-x-full opacity-0'
              enterTo='opacity-100 translate-x-0'
              leave='ease-in duration-200'
              leaveFrom='translate-x-0 opacity-100'
              leaveTo='opacity-0 translate-x-full'

              // enter='transition ease-in-out duration-300 transform delay-1000'
              // enterFrom='!translate-x-full'
              // enterTo='translate-x-0 asdf'
              // leave='transition ease-in-out duration-300 transform'
              // leaveFrom='translate-x-0'
              // leaveTo='translate-x-full'
            >
              <Dialog.Panel className='transform overflow-hidden bg-white p-6 text-left align-middle shadow-xl transition-all '>
                <Dialog.Title
                  as='h3'
                  className='text-xl font-medium uppercase leading-6 text-primary'
                >
                  Oh no!
                </Dialog.Title>
                <div className='my-2'>
                  <p className=''>
                    There was an issue while ordering. This could be a temporary issue, please try
                    your action again later.
                  </p>
                </div>

                <div className='mt-4 flex justify-end'>
                  <button
                    type='button'
                    className='text-solid-stone-300 inline-flex justify-center border border-transparent bg-gray-200 px-4 py-2 uppercase hover:hover:bg-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2'
                    onClick={() => {
                      setIsOpen(false)
                    }}
                  >
                    Got it, thanks!
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
