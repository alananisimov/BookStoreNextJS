import axios from 'axios'
import { useEffect, useState } from 'react'
import { MyProduct } from '../models';
export function useProducts() {

  const [products, setProducts] = useState<MyProduct[]>([])
  let [Loading, setLoading] = useState(Boolean)
  async function FetchProducts() {
    setLoading(true)
    const response = await axios.get<MyProduct[]>("https://web-production-7dc2.up.railway.app/https://nestjsstoreapi-production.up.railway.app/products", {headers: {
      "X-Requested-With": "XMLHttpRequest"
    },})
    .finally(() => {
      setLoading(false)
    })

    console.log(response)
    setProducts(response.data)

  }
  useEffect(() => {
    FetchProducts()
  }, [])
  return{ Loading, products}
}