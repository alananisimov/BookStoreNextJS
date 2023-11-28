/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useReadLocalStorage } from "usehooks-ts";
import RemoveItem from "./RemoveItem";
import { MyProduct } from "../models";
import Image from "next/image";
import { useState } from "react";
import { Skeleton } from "@chakra-ui/react";

export default function CartItems() {
  const cart_items = useReadLocalStorage<MyProduct[]>("items");
  const [imageLoaded, setLoaded] = useState(Boolean);
  return (
    <>
      {cart_items?.length != 0 && cart_items?.at(0) != undefined ? (
        cart_items?.map((product, index) => (
          <div className="flex flex-col rounded-lg bg-white" key={index}>
            <div className="inline-flex gap-5">
              <img
                className="m-2 h-24 w-28 rounded-md border object-cover object-center"
                src={product.image}
                alt=""
              />
              <div className="flex-col">
                <span className="font-semibold">{product.title}</span>

                <p className="text-lg font-bold">${product.price}</p>
              </div>
              <button className="btn w-20 ml-auto float-left">
                <RemoveItem name={product.title} symbol="Удалить" />
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="flex flex-col rounded-lg bg-white sm:flex-row">
          <Skeleton isLoaded={imageLoaded}>
            <Image
              className="m-2 h-24 w-28 rounded-md border object-cover object-center"
              src="https://i.ibb.co/mCTDNvJ/empty-4731755.png"
              alt="No cart items"
              height={96}
              onLoadingComplete={() => setLoaded(true)}
              width={96}
            />
          </Skeleton>
          <div className="flex w-full flex-col px-4 py-4 justify-center">
            <span className="font-semibold">Ваша корзина пуста</span>
          </div>
        </div>
      )}
    </>
  );
}
