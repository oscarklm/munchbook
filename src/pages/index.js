import React from 'react';
import RestaurantCard from '../components/RestaurantCard';

export default function index() {
  return (
    <>
      <div>
        <h1 className="pt-8 text-5xl font-black text-center ">TheMunchBook</h1>
      </div>
      <div className="max-w-screen-md px-8 mx-auto">
        <RestaurantCard
          restaurant={{
            name: 'Ssam Korean Food',
            desc:
              'Delicious korean food, and nice sparkly cocktails. Also a nice place to listen to some k-pop and drink soju with friends!',
            url: './img/restaurants/ssam.jpg'
          }}
        />
        <RestaurantCard
          restaurant={{
            name: 'April Coffee',
            desc:
              'Amazing coffee in Østerbro, made with in-house roasted coffee beans freshly imported with love.',
            url: './img/restaurants/april.png'
          }}
        />
      </div>
    </>
  );
}
