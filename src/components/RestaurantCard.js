import React from 'react';

export default function RestaurantCard({ restaurant }) {
  const { name, location, desc, url, tags } = restaurant;
  return (
    <div className="flex-none w-full mb-6 border-t-2 border-r-2 border-gray-200 rounded-lg shadow-lg sm:flex">
      <img
        className="flex-none object-cover w-full h-48 rounded-t-lg sm:rounded-l-lg sm:rounded-t-none sm:h-auto sm:w-56"
        src={url}
        alt={name}
      ></img>
      <div className="flex flex-col justify-between p-4 leading-normal">
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
          <div class=" flex-1 items-center justify-center">
            {tags.map((tag) => (
              <span class="inline-block bg-gray-200 rounded-full p-2 text-sm font-semibold text-gray-700 mx-1">
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
              Read more...
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
