import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import ReactPlayer from "react-player/youtube";

export default function PopUp({isOpen, setIsOpen, videoId}) {

  function closeModal() {
    }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as='div'
          className='relative z-10'
          onClose={() => setIsOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'>
                <Dialog.Panel className='w-full h-[500px] max-w-3xl p-6 transform overflow-hidden rounded-2xl text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title
                    as='h3'
                    className='text-lg font-medium leading-6 pb-2 text-white cursor-pointer inline-flex' onClick={()=> setIsOpen(false)}>
                   Close
                  </Dialog.Title>
                  <div className='w-full h-full'>
                    <ReactPlayer
                      url={`https://www.youtube.com/watch?v=${videoId}`}
                      controls
                      width='100%'
                      height='100%'
                    />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
