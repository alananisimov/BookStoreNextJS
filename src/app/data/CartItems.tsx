/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useReadLocalStorage } from "usehooks-ts"
import RemoveItem from "./RemoveItem"
import { MyProduct } from "../models"


export default function CartItems(){
    const cart_items = useReadLocalStorage<MyProduct[]>('items')
   
    return(
        <>
        {cart_items?.length != 0 ? cart_items?.map((product, index) => <div className="flex flex-col rounded-lg bg-white" key={index}>
          <div className="inline-flex gap-5">
          <img className="m-2 h-24 w-28 rounded-md border object-cover object-center" src={product.image} alt="" />
          <div className="flex-col">
          <span className="font-semibold">{product.title}</span>
          
          <p className="text-lg font-bold">${product.price}</p>
          </div>
        <button className="btn w-20 ml-auto float-left"><RemoveItem name={product.title} symbol="Удалить"/></button>
        </div>
        
      </div>): 
      <div className="flex flex-col rounded-lg bg-white sm:flex-row">
       <img className="m-2 h-24 w-28 rounded-md border object-cover object-center" src="https://i.ibb.co/mCTDNvJ/empty-4731755.png"/>
      <div className="flex w-full flex-col px-4 py-4 justify-center">
        <span className="font-semibold">Ваша корзина пуста</span>

      </div>
    </div>}
        </>
    )
}