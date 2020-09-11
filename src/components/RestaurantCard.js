import React from 'react';
import { isSafari } from 'react-device-detect';

export default function RestaurantCard({ restaurant }) {
  const { name, location, desc, imgUrl, imgFallback, tags } = restaurant;
  console.log(isSafari);
  return (
    <div className="flex-none w-full mb-6 border-t-2 border-r-2 border-gray-200 rounded-lg shadow-lg sm:flex">
      <img
        className="flex-none object-cover rounded-t-lg sm:w-56 sm:h-auto sm:rounded-t-none sm:rounded-l-lg"
        src={imgFallback}
        alt={name}
      />
      <div className="flex flex-col justify-between p-4">
        <div className="mb-8">
          <div className="text-xl font-bold text-gray-900 sm:text-2xl">
            {name}
          </div>
          <div className="mb-2 text-sm font-bold text-gray-500">
            <span className="text-base font-thin ">located in </span>
            {location}
          </div>
          <p className="text-base text-gray-700">{desc}</p>
        </div>
        <div className="items-center justify-center flex-none sm:flex">
          <div className="items-center justify-center flex-1 ">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-block p-2 mx-1 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
          <div className="mt-6 mb-2 text-center sm:mt-0 sm:mb-0">
            <a
              className="p-3 text-sm font-bold tracking-wider text-green-100 uppercase bg-green-400 shadow-lg cursor-pointer hover:bg-gray-700"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
