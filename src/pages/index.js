import React from 'react';
import RestaurantCard from '../components/RestaurantCard';

export default function index() {
  return (
    <>
      <div className="flex flex-col items-center justify-center pt-8">
        <h1 className="text-3xl font-black text-center sm:text-5xl">
          TheMunchBook 🍔
        </h1>
        <p className="text-sm font-extrabold text-center text-gray-500 sm:text-base">
          The{' '}
          <span className="text-gray-700 border-b-2 border-gray-700 ">
            {'FASTEST'}
          </span>{' '}
          way to find <br className="sm:hidden" />
          delicious foods, and drinks near you.
        </p>
      </div>
      <div className="max-w-screen-md px-8 mx-auto mt-5 sm:mt-10">
        <h1 className="my-2 text-lg italic font-extrabold text-gray-300 sm:text-2xl">
          Restaurants near you...
        </h1>
        <RestaurantCard
          restaurant={{
            name: 'Ssam Korean Food',
            location: 'Vesterbro',
            desc:
              'Delicious korean food, and nice sparkly cocktails. Also a nice place to listen to some k-pop and drink soju with friends!',
            url: './img/restaurants/ssambar.webp',
            tags: ['Korean', 'Food', 'BBQ']
          }}
        />
        <RestaurantCard
          restaurant={{
            name: 'April Coffee',
            location: 'Østerbro',
            desc:
              'Amazing coffee in Østerbro, made with in-house roasted coffee beans freshly imported with love.',
            url: './img/restaurants/aprilcoffee.webp',
            tags: ['Coffee', 'Roastery', 'Tools']
          }}
        />
        <RestaurantCard
          restaurant={{
            name: 'Pizza Bro',
            location: 'Islands Brygge',
            desc:
              'Real nice italian Pizza made in stone oven, it crazy what comes out of this little pizza truck.',
            url: './img/restaurants/pizzabro.webp',
            tags: ['Pizza', 'Italian', 'StoneOven']
          }}
        />
        <RestaurantCard
          restaurant={{
            name: 'Anderson Bakery',
            location: 'Islands Brygge',
            desc:
              'This cozy bakery located in Islands Brygge is one of the best, if not the best in Denmark. Freshly baked bread, and beautiful cakes.',
            url: './img/restaurants/bakery.webp',
            tags: ['Bakery', 'Pastry', 'Cakes']
          }}
        />
      </div>
    </>
  );
}
