import axios from "axios";
import { useEffect, useState } from "react";
import { MyProduct } from "../models";
export function useProducts() {
  const [products, setProducts] = useState<MyProduct[]>([]);
  let [Loading, setLoading] = useState(Boolean);
  async function FetchProducts() {
    setLoading(true);
    const response = await axios
      .get<MyProduct[]>("https://api.bookconer.site" + "/products", {})
      .finally(() => {
        setLoading(false);
      });

    setProducts(response.data);
  }
  useEffect(() => {
    FetchProducts();
  }, []);
  return { Loading, products };
}
