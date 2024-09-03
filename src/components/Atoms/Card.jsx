import Image from "next/image.js";
import Link from "next/link.js";
import React, { Suspense } from "react";
import CardSkeleton from "../Skeleton/CardSkeleton.jsx";

function Card({ id, title, img, description, price, category }) {
  return (
    <div className="w-full max-w-xs m-2 bg-white border border-gray-200 rounded-lg shadow h-96 dark:bg-gray-800 dark:border-gray-700">
      <Suspense fallback={<CardSkeleton />}>
        <Link
          href={`/productos/detail/${id}`}
          className="flex justify-center mt-2"
        >
          <Image
            priority={false}
            src={img}
            alt={`autoshop, ${category}, ${title}, ${description}`}
            height={288}
            width={288}
            className="object-contain p-2 rounded-t-lg max-w-52 h-52"
          />
        </Link>
        <div className="px-5 pb-5">
          <Link href={`/productos/detail/${id}`}>
            <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </Link>
          <div className="flex items-center mt-2.5 mb-5">
            <div className="badge badge-outline">{category}</div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              ${price}
            </span>
            <a
              href="#"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to cart
            </a>
          </div>
        </div>
      </Suspense>
    </div>
  );
}

export default Card;
