/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useReadLocalStorage } from "usehooks-ts";
import RemoveItem from "./RemoveItem";
import { MyProduct, auth_key } from "../models";
import { useProducts } from "../hooks/products";
import axios from "axios";
import UpdateModal from "@/components/UpdateModal";
import { useEffect, useState } from "react";
import { Spinner } from "@chakra-ui/react";
import { example_product } from "./ExampleProduct";
import AddModal from "@/components/AddModal";

export default function AdminProducts() {
  const { products } = useProducts();
  const [curProduct, setCurProduct] = useState<MyProduct>();

  const deleteItem = (id: number) => {
    const auth_req = axios.post<auth_key>(
      "https://api.bookconer.site/auth/login",
      {
        username: "alexander",
        password: "23092009",
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(auth_req);
    auth_req.then((data) => {
      console.log(data.data.access_token);
      let req = axios.delete(
        String("https://api.bookconer.site/products/deletebyid/" + String(id)),
        {
          headers: {
            Authorization: "Bearer " + data.data.access_token,
          },
        }
      );
      console.log(req);
    });
  };
  const [isUpdate, setUpdate] = useState(false);
  const [isAdd, setAdd] = useState(false);
  return (
    <>
      {isUpdate && (
        <UpdateModal product_props={curProduct} setOpen={setUpdate} />
      )}
      {isAdd && <AddModal product_props={curProduct} setOpen={setUpdate} />}
      <div className="container mx-auto grid-cols-1 md:grid-cols-3 grid gap-16">
        {products?.length != 0 ? (
          products?.map((product, index) => (
            <div
              className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
              key={index}
            >
              <div className="p-4 md:p-5">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                  {product.title}
                </h3>
                <p className="mt-2 text-gray-800 dark:text-gray-400">
                  {product.description}
                </p>
                <div className="flex flex-col">
                  <a
                    className="inline-flex items-center gap-2 mt-5 text-sm font-medium text-blue-500 hover:text-blue-700"
                    onClick={() => {
                      deleteItem(product.id);
                    }}
                  >
                    Удалить
                    <svg
                      className="w-2.5 h-auto"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </a>
                  <a
                    className="inline-flex items-center gap-2 mt-5 text-sm font-medium text-blue-500 hover:text-blue-700"
                    onClick={() => {
                      setUpdate((prevent) => !prevent);
                      setCurProduct(product);
                    }}
                  >
                    Изменить
                    <svg
                      className="w-2.5 h-auto"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="justify-center items-center w-full h-full">
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </div>
        )}
        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <div className="p-4 md:p-5">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
              Добавить продукт
            </h3>
            <div className="flex flex-col">
              <a
                className="inline-flex items-center gap-2 mt-5 text-sm font-medium text-blue-500 hover:text-blue-700"
                onClick={() => {
                  setAdd((prevent) => !prevent);
                  setCurProduct(example_product);
                }}
              >
                Добавить
                <svg
                  className="w-2.5 h-auto"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
