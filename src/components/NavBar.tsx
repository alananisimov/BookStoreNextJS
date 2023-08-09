import { useEffect, useState } from 'react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { createClient } from '@supabase/supabase-js'
import { useLocalStorage, useReadLocalStorage } from 'usehooks-ts'
import router from 'next/router'
import RemoveItem from './RemoveItem'
import { CartPrice } from '../app/data/CartPrice'
const supabase = createClient('https://kmdxpccclvazdidvtckr.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImttZHhwY2NjbHZhemRpZHZ0Y2tyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTExNDAwMjcsImV4cCI6MjAwNjcxNjAyN30.hvzOvB242NhDMvezKoUnZODRiC8NYGBTpLbAbh0tVws')

export default function Example() {
  const [Myitems, setItems] = useLocalStorage<Object[]>('items', [])
  const [user, setUser] = useState(null)
  const cart_items = useReadLocalStorage<Object[]>('items')
  const [cart_price, setCartPrice] = useState(0)
  
  function clearCart(){
    
    setItems([])
    setCartPrice(0)
  }

  const [session, setSession] = useState(null)
    useEffect(() => {
      supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session)
      })
      supabase.auth.getUser().then(({data: {user}}) => {
        setUser(user)
      })
      supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session)
      })

      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
      })

      
    }, [])
    if(user)
    console.log(user.user_metadata.avatar_url)
  return (
    <div className="navbar bg-base-100">
    <div className="flex-1">
      <img src="/book.jpg" className='w-16 h-16'/>
      <a href='/' className="btn btn-ghost normal-case text-xl">Книжный уголок</a>
    </div>
    <div className="flex-none">
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            <span className="badge badge-sm indicator-item">{cart_items?.length == undefined ? "0": cart_items.length}</span>
          </div>
        </label>
        <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-56 md:w-96 bg-base-100 shadow">
          <div className="card-body">
            <span className="font-bold text-lg">{cart_items?.length} Товара</span>
            
            <span className="text-info pb-6">Общая цена: $<CartPrice/></span>
    <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
    
   {cart_items ?  cart_items.map((item, index) =>
   <li className="pb-3 sm:pb-4" key={index}>
      <div className="flex items-center space-x-4">
         <div className="flex-shrink-0">
            <img className="w-8 h-8 rounded-full" src={item.imageSrc} alt={item.imageAlt}/>
         </div>
         <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
               {item.name}
            </p>
           
         </div>
         <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            ${item.price}
            
         </div>
         
           <button className='hover:bg-gray-300 hover:rounded-md w-16 hidden md:flex'><RemoveItem name={item.name} symbol="Удалить"/></button>
           <button className='hover:bg-gray-300 hover:rounded-md w-16 md:hidden text-2xl'><RemoveItem name={item.name} symbol="-"/></button>

         
      </div>
   </li>): "no items"}
   </ul>
            
            
            <div className="card-actions pt-6">
              <button className="btn btn-primary btn-group btn-block md:w-[37%] bg-red-500 hover:bg-red-600 border-red-600 hover:border-red-700" onClick={clearCart}>Очистить</button>
              <button className="btn btn-primary btn-group btn-block md:w-[60%]" onClick={()=>{router.push('/checkout')}}>Оформить</button>
            </div>
          </div>
        </div>
      </div>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src={user? user.user_metadata.avatar_url: "/profile.png"} />
          </div>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <a className="justify-between">
              Профиль
              
            </a>
          </li>
          <li><a>Настройки</a></li>
          {session ? <li><a onClick={() => {supabase.auth.signOut()
          supabase.auth.refreshSession()}}>Выйти</a></li>: <li ><Link href="/login">Войти</Link></li>}
        </ul>
      </div>
    </div>
  </div>
  )
}
