/* eslint-disable @next/next/no-img-element */
import { MyProduct, ReviewProps } from "@/app/models";
import { StarIcon } from "@heroicons/react/24/solid";
import Review from "./Review";
import Image from "next/image";
import { useReviews } from "@/app/hooks/reviews";
import { Skeleton } from "@chakra-ui/react";
import { useState } from "react";
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
function getRatingDescription(rating: number) {
  if (rating >= 4.5) {
    return "Отличная оценка";
  } else if (rating >= 3.5) {
    return "Хорошая оценка";
  } else if (rating >= 2.5) {
    return "Средняя оценка";
  } else if (rating >= 1.5) {
    return "Плохая оценка";
  } else {
    return "Очень плохая оценка";
  }
}
export function Stats({ product_props }: { product_props: MyProduct }) {
  const description = getRatingDescription(product_props.rate);
  const [isLoaded, setLoading] = useState(Boolean);
  // const testReview: ReviewProps = {
  //   name: "Alexander",
  //   date: "",
  //   header: "",
  //   photo_url: "https://placehold.co/360x540/png",
  //   stars: 4,
  //   text: "Очень хорошая книга! Моему сыну как раз по душе. Читаем всей семьей",
  //   avatar_url:
  //     "https://fastly.picsum.photos/id/1/200/200.jpg?hmac=jZB9EZ0Vtzq-BZSmo7JKBBKJLW46nntxq79VMkCiBG8",
  // };
  const { reviews, Loading } = useReviews();
  return (
    <>
      <div className="hidden sm:flex flex-col w-full">
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white">
            Отзывы
          </h3>
          <div className="inline-flex">
            <p className="mt-1 text-gray-800 dark:text-gray-400 text-4xl font-bold =">
              {product_props.rate}
            </p>
            <div className="flex items-center pl-2">
              <h4>{description}</h4>
            </div>
          </div>
          <p className="mt-5 text-xs text-gray-500 dark:text-gray-500">
            Last updated 5 mins ago
          </p>
        </div>
        <div className="carousel carousel-center px-4 space-x-3 bg-transparent border-1 border-gray-600">
          {reviews.map((e, i) => (
            <Skeleton key={i} isLoaded={!Loading}>
              <div className="carousel-item bg-gray-600/75">
                <Image
                  src={e.photo_url}
                  height={150}
                  width={150}
                  alt={product_props.title}
                />
              </div>
            </Skeleton>
          ))}
        </div>
        {reviews.map((e, i) => (
          <Review review_props={e} key={i} />
        ))}
        <button className="bottom-0 right-0 left-0 mt-10 flex items-center justify-center rounded-md bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 m-4">
          Посмотреть все отзывы
        </button>
      </div>

      <div className="flex sm:hidden flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
        <div className="p-4 md:p-5">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white">
            Отзывы
          </h3>
          <div className="inline-flex">
            <p className="mt-1 text-gray-800 dark:text-gray-400 text-4xl font-bold =">
              {product_props.rate}
            </p>
            <div className="flex items-center pl-2">
              <h4>{description}</h4>
            </div>
          </div>
          <p className="mt-5 text-xs text-gray-500 dark:text-gray-500">
            Last updated 5 mins ago
          </p>
        </div>
        <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-transparent rounded-box mr-4">
          {reviews.map((e, i) => (
            <div className="carousel-item relative w-20 h-20" key={i}>
              <Image
                src={e.photo_url}
                alt={e.header}
                className="rounded-xl w-20 h-20"
                height={80}
                width={80}
              />
            </div>
          ))}
        </div>
        {reviews.map((e, i) => (
          <Review review_props={e} key={i} />
        ))}
        <button className="bottom-0 right-0 left-0 mt-10 flex items-center justify-center rounded-md bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 m-4">
          Посмотреть все отзывы
        </button>
      </div>
    </>
  );
}
