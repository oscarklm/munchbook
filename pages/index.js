import React from 'react';

export default function index() {
  return (
    <>
      <div className="max-w-md px-8 py-12 mx-auto sm:max-w-xl">
        <img className="w-64 h-20 " src="/img/logo.svg"></img>
        <img
          className="mt-4 rounded-lg shadow-xl"
          src="https://picsum.photos/seed/picsum/400/400"
        ></img>
        <h1 className="mt-6 text-2xl font-bold leading-tight text-gray-900">
          You can work from anywhere.
          <br />
          <span className="text-indigo-500">Take advantage of that!</span>
        </h1>
        <p className="mt-2 text-gray-600">
          Loremipsum helps you find work-friendly rentals in beautiful locations
          so you can enjoy some nice weather even when you're not on vacation.
        </p>
        <div className="mt-4">
          <a
            href="#"
            className="inline-block px-4 py-3 text-sm font-semibold tracking-wider text-white uppercase bg-indigo-500 rounded-lg shadow-lg"
          >
            Book your escape
          </a>
        </div>
      </div>
    </>
  );
}
