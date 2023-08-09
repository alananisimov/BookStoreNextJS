import { Product } from '../../components/Product'
import { products } from '../data/products'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { MyProduct } from '../models';
export function useProducts() {

  const [products, setProducts] = useState<MyProduct[]>([])
  let [Loading, setLoading] = useState(Boolean)
  async function FetchProducts() {
    setLoading(true)
    const response = await axios.get<MyProduct[]>("https://nest-js-store-api.vercel.app/products.json"
    )
    .finally(() => {setLoading(false)})

    console.log(response)
    setProducts(response.data)

  }
  useEffect(() => {
    FetchProducts()
  }, [])
  return{ Loading, products}
}