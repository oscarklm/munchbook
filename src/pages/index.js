import React from 'react';

export default function index() {
  return (
    <>
      <div className="flex bg-gray-100">
        <div className="max-w-md px-8 py-12 mx-auto sm:max-w-xl lg:max-w-full lg:w-1/2 lg:py-24 lg:px12">
          <div className="ml-auto xl:max-w-lg">
            <img className="w-64 h-20 " src="/img/logo.svg"></img>
            <img
              className="object-cover object-center w-full h-64 mt-4 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full lg:hidden"
              src="https://picsum.photos/seed/fqwdwq/1200/1200"
            ></img>
            <h1 className="mt-6 text-2xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-3xl xl:text-4xl sm:mt-8">
              You can work from anywhere.
              <br className="hidden lg:inline" />
              <span className="text-indigo-500"> Take advantage of that!</span>
            </h1>
            <p className="mt-2 text-gray-600 sm:text-xl sm:mt-4">
              Loremipsum helps you find work-friendly rentals in beautiful
              locations so you can enjoy some nice weather even when you're not
              on vacation.
            </p>
            <div className="mt-4 sm:mt-6">
              <a href="#" className="shadow-lg btn btn-indigo sm:text-base">
                Book your escape
              </a>
              <a href="#" className="ml-2 btn btn-gray sm:text-base">
                Learn more
              </a>
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/2 lg:relative">
          <img
            className="absolute inset-0 object-cover object-center w-full h-full"
            src="https://picsum.photos/seed/fqwdwq/1200/1200"
          ></img>
        </div>
      </div>
    </>
  );
}
