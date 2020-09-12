import React from 'react';
import RestaurantCard from '../components/RestaurantCard';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Index = ({ venues }) => {
  return (
    <>
      <div className="container">
        <h1>Venues</h1>
        <div className="grid justify-center grid-rows-1 gap-4 sm:grid-cols-3">
          {venues.map((venue) => {
            return (
              <div>
                <div className="p-4 m-4 bg-gray-500">
                  <Link href={`/${venue._id}`}>
                    <a>{venue.title}</a>
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

Index.getInitialProps = async () => {
  const res = await fetch('http://themunchbook.com/api/venues');
  const { data } = await res.json();

  return { venues: data };
};

export default Index;
