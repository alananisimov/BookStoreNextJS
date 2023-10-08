import { ReviewProps } from "@/app/models";
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
export default function ReviewItem({
  review_props,
}: {
  review_props: ReviewProps;
}) {
  return (
    <div className="inline-flex p-4">
      <div className="avatar">
        <div className="w-12 rounded-full">
          <Image
            src={review_props.avatar_url}
            alt="review user avatar"
            height={540}
            width={360}
          />
        </div>
      </div>
      <div className="ml-2 flex flex-col">
        <div className="font-semibold">{review_props.name}</div>
        <div className="flex items-center mx-auto">
          {[0, 1, 2, 3, 4].map((rating) => (
            <StarIcon
              key={rating}
              className={classNames(
                review_props.stars > rating
                  ? " text-orange-400"
                  : "text-gray-400",
                "h-5 w-5 flex-shrink-0"
              )}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
