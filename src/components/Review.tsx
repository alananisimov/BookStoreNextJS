/* eslint-disable @next/next/no-img-element */
import { Review, ReviewProps } from "@/app/models";
import { StarIcon } from "@heroicons/react/24/solid";
import PhotoPreview from "./PhotoPreview";
import { Skeleton, useDisclosure } from "@chakra-ui/react";
import ReviewItem from "./ReviewItem";
import Image from "next/image";
import { useState } from "react";
export default function Review({
  review_props,
}: {
  review_props: ReviewProps;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log(review_props);
  const [isLoaded, setLoaded] = useState(false);
  return (
    <>
      <PhotoPreview
        photo_url={review_props.photo_url}
        author_name={review_props.name}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      />

      <ReviewItem review_props={review_props} />

      <div
        className="bg-gray-100 mx-8 w-2/3 cursor-zoom-in relative h-full justify-center rounded-box group"
        onClick={() => {
          onOpen();
        }}
      >
        <Skeleton isLoaded={isLoaded}>
          <Image
            src={review_props.photo_url}
            alt="Review photo"
            priority={true}
            onLoad={() => setLoaded(true)}
            width={360}
            height={540}
            className="mx-auto sm:w-1/2 w-full group-hover:blur-sm"
          />
        </Skeleton>

        <div className="absolute bottom-0 left-0 right-0 top-[calc(50%-24px)] justify-center">
          <div className="hidden group-hover:flex text-center flex-col">
            <button className="btn btn-active btn-ghost mx-auto">
              Увеличить
            </button>
          </div>
        </div>
      </div>
      <div className="mx-8 my-2 text-sm">
        <span className="font-bold">От покупателя:</span>
        {" " + review_props.text}
      </div>
    </>
  );
}
