import Link from 'next/link';

const Navbar = () => (
  <>
    <header className="flex flex-wrap items-center px-6 py-2 bg-white lg:px-16 lg:py-0">
      <div className="flex items-center justify-between flex-1 ">
        <Link href="/">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="32"
              height="36"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </a>
        </Link>
      </div>
      <label for="menu-toggle" className="block cursor-pointer lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          width="20"
          height="20"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </label>
      <input type="checkbox" className="hidden" id="menu-toggle" />
      <div
        className="hidden w-full lg:flex lg:items-center lg:w-auto"
        id="menu"
      >
        <nav className="">
          <ul className="items-center justify-between pt-4 text-base text-gray-700 lg:flex lg:pt-0">
            <Link href="/venues">
              <a className="block px-0 py-3 font-medium lg:p-4 hover:text-black">
                Venues
              </a>
            </Link>
          </ul>
        </nav>
        <Link href="create">
          <a className="flex items-center justify-start mb-4 font-bold rounded-lg cursor-pointer lg:ml-4 lg:mb-0 hover:text-green-600">
            <span className="mr-2">Create Venue</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              width="30"
              height="30"
              className="hover:text-green-600"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </Link>
      </div>
    </header>
    <div className="px-4">
      <div></div>
    </div>
  </>
);

export default Navbar;
