import React from 'react';

export default function RestaurantCard({ restaurant }) {
  const { name, desc, url } = restaurant;
  return (
    <div className="flex-none w-full mt-8 shadow-lg sm:flex">
      <img
        className="flex-none object-cover object-center w-full h-48 sm:h-auto sm:w-48"
        src={url}
        alt={name}
      ></img>
      <div className="flex flex-col justify-between p-4 leading-normal bg-white border-b border-l border-r border-gray-400 rounded-b lg:border-l-0 lg:border-t lg:border-gray-400 lg:rounded-b-none lg:rounded-r">
        <div className="mb-8">
          <div className="mb-2 text-xl font-bold text-gray-900">{name}</div>
          <p className="text-base text-gray-700">{desc}</p>
        </div>
        <div class="pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #korean
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #drinks
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #bbq
          </span>
        </div>
        <div className="my-4 ml-2">
          <a
            className="p-3 mr-2 text-base font-bold tracking-wider text-white uppercase bg-gray-800"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Book a table
          </a>
        </div>
      </div>
    </div>
  );
}
