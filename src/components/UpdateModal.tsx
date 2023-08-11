/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { MyProduct } from '@/app/models'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

interface Product {
    product_props: MyProduct | undefined
}

export default function UpdateModal({product_props, setOpen}: {product_props:MyProduct|undefined, setOpen: any}) {
  return (
    <form className='mx-auto my-12 max-w-md'>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">{product_props?.title}</h2>
          

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              
              
            </div>

            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                Информация о продукте
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={10}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={JSON.stringify(product_props, null, 4)}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">Просто обновите json файл для и нажмите {'"сохранить"'}</p>
            </div>

           
          </div>
        </div>

        

       
           
          </div>
        

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900" onClick={()=>{setOpen(false)}}>
          Отменить
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Сохранить
        </button>
      </div>
    </form>
  )
}
