/* eslint-disable @next/next/no-img-element */
import { MyProduct, ReviewProps } from "@/app/models";
import { StarIcon } from "@heroicons/react/24/solid";
import Review from "./Review";
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
        <div className="carousel carousel-center px-4 space-x-3 bg-transparent">
          {[...Array(8)].map((e, i) => (
            <div className="carousel-item" key={i}>
              <img
                src="https://fastly.picsum.photos/id/283/200/300.jpg?hmac=HVbRBUPQVx2vypDRbrSdilx6LhDFbU9jsqNdlKR9J9I"
                className="rounded-lg w-20 h-20"
              />
            </div>
          ))}
        </div>
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
          {[...Array(8)].map((e, i) => (
            <div className="carousel-item relative w-20 h-20" key={i}>
              <img
                src="https://fastly.picsum.photos/id/1029/200/300.jpg?hmac=VpePgDBTGFZYhRTeOD9o6nCvZB_01SrIHCMMkoZal_A"
                alt="Pizza"
                className="rounded-xl w-20 h-20"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
