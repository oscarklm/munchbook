import React from 'react';
import RestaurantCard from '../components/RestaurantCard';
import Link from 'next/link';
import useSWR from 'swr';

const fetcher = (path) => fetch(path).then((res) => res.json());

const Index = () => {
  const { data, error } = useSWR('/api/venues', fetcher);

  if (error) return <div>Failed to load...</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <div className="container mx-auto">
        <h1 className="py-4 text-3xl font-extrabold text-center">Venues</h1>
        <div className="grid justify-center grid-cols-1 gap-8">
          {data.map((venue) => {
            return (
              <div key={venue._id}>
                <div
                  className="p-4 bg-gray-400 rounded-lg shadow-lg cursor-pointer"
                  onClick={() => {}}
                >
                  <Link href={`/venues/${venue._id}`}>
                    <a className="text-2xl font-bold hover:text-gray-700">
                      {venue.title}
                    </a>
                  </Link>
                  <p>{venue.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Index;
