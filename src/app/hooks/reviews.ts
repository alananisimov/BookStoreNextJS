import axios from "axios";
import { useEffect, useState } from "react";
import { MyProduct, Review, ReviewProps } from "../models";
export function useReviews() {
  const [reviews, setReviews] = useState<ReviewProps[]>([]);
  let [Loading, setLoading] = useState(Boolean);
  async function FetchReviews() {
    setLoading(true);
    const response = await axios
      .get<ReviewProps[]>("https://api.bookconer.site" + "/reviews", {})
      .finally(() => {
        setLoading(false);
      });

    console.log(response.data);
    setReviews(response.data);
  }
  useEffect(() => {
    FetchReviews();
  }, []);
  return { Loading, reviews };
}
