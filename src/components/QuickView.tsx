/* eslint-disable @next/next/no-img-element */
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { Dispatch, Fragment, SetStateAction, useEffect, useState } from 'react'
import { Dialog, RadioGroup, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/20/solid'
import { MyProduct } from '@/app/models'
import { useLocalStorage } from 'usehooks-ts'
import { useReadLocalStorage } from 'usehooks-ts'
import RemoveItem from '../app/data/RemoveItem'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function QuickView({product_props, open, setOpen, usePlus, setPlus}: {product_props: MyProduct, open: boolean, setOpen: Dispatch<SetStateAction<boolean>>, usePlus: number, setPlus: Dispatch<SetStateAction<number>>}) {
  
  const [Myitems, setItems] = useLocalStorage<Array<String>>('items', [])

  //написать статью
  //написать статью
  //написать статью
  //написать статью
  //написать статью
  const addItem = (de: any) => {
  setItems(prevent =>[...prevent, de])
  }

  
  return (
    <Transition.Root show={open} as={Fragment}>
      
      <Dialog as="div" className="relative z-10" onClose={()=>{setOpen(false)}}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              enterTo="opacity-100 translate-y-0 md:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 md:scale-100"
              leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            >
              <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                  <button
                    type="button"
                    className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  <div className="grid w-full grid-cols-1 items-center gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                    <div className="aspect-h-3 aspect-w-2 overflow-hidden col-span-2 rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                      <img src={product_props.image} alt={product_props.image} className="object-cover object-center"/>
                    </div>
                    <div className="sm:col-span-8 lg:col-span-7">
                      <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{product_props.title}</h2>

                      <section aria-labelledby="information-heading" className="mt-2">
                        <h3 id="information-heading" className="sr-only">
                          Product information
                        </h3>

                        <p className="text-2xl text-gray-900">{product_props.price} USD</p>

                        {/* Reviews */}
                        <div className="mt-6">
                          <h4 className="sr-only">Reviews</h4>
                          <div className="flex items-center">
                            <div className="flex items-center">
                              {[0, 1, 2, 3, 4].map((rating) => (
                                <StarIcon
                                  key={rating}
                                  className={classNames(
                                    product_props.rating.rate > rating ? 'text-gray-900' : 'text-gray-200',
                                    'h-5 w-5 flex-shrink-0'
                                  )}
                                  aria-hidden="true"
                                />
                              ))}
                            </div>
                            <p className="sr-only">{product_props.rating.count} out of 5 stars</p>
                            <a href="#" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                              {product_props.rating.count} reviews
                            </a>
                          </div>
                        </div>
                      </section>

                      <section aria-labelledby="options-heading" className="mt-10">
                        <h3 id="options-heading" className="sr-only">
                          Product options
                        </h3>

                        
                          {/* Colors */}
                          <div>
                            <h4 className="text-sm font-medium text-gray-900">Description</h4>
                            <h2>{product_props.description}</h2>
                            
                          </div>
                          {usePlus == 0 ? <button
                            onClick={()=>{addItem(product_props)
                              setPlus(prevent => prevent +1 )
                            }}
                            className="bottom-0 mt-20 mr-10 flex w-[100%] items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          >
                            Добавить в корзину
                          </button> :
                          <div className='inline-flex text-2xl w-full'>
                            <div className="bottom-0 mt-20 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 text-base font-medium text-white">
                            <button className='w-10 h-10 hover:bg-indigo-800 rounded-md'
                            onClick={()=>{
                              setPlus(prevent => prevent+1)
                              addItem(product_props)
                              }}>
                                +
                              </button>
                              <div className='mx-auto justify-center text-center items-center'>
                              {usePlus}
                              </div>
                            <button className='w-10 h-10 hover:bg-indigo-800 rounded-md' onClick={()=>{setPlus(prevent => prevent-1)}}><RemoveItem name={product_props.title} symbol='-'/></button>
                          </div>
                          
                          </div>}
                        
                      </section>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
