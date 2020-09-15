import Head from 'next/head';
import { useContext } from 'react';
import { LoggedInContext, MagicContext } from './Store';
import Link from 'next/link';

const Layout = () => {
  const [loggedIn, setLoggedIn] = useContext(LoggedInContext);
  const [magic] = useContext(MagicContext);

  /**
   * Log user out of of the session with our app (clears the `auth` cookie)
   * Log the user out of their session with Magic
   */
  const handleLogout = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/user/logout`, {
      method: 'GET'
    });
    setLoggedIn(false);
    await magic.user.logout();
  };

  return (
    <>
      <Head>
        <title>Next Magic Todo</title>
      </Head>
      <nav className="items-center justify-between gap-3 p-4 text-sm font-medium text-white bg-gray-800 sm:flex sm:text-xl">
        <div className="">TheMunchBook</div>
        {/* If a user is logged in, show our Welcome message and Logout button */}
        {loggedIn ? (
          <>
            <div className="">Welcome, {loggedIn}</div>
            <div className="inline-block p-2 text-gray-800 bg-red-500 rounded-lg cursor-pointer hover:text-white">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  handleLogout();
                }}
              >
                Logout
              </a>
            </div>
          </>
        ) : (
          // Else, show the Login button
          <>
            <Link href="/login">
              <div className="inline-block p-2 text-gray-800 bg-pink-500 rounded-lg cursor-pointer hover:text-white">
                <a>Log in</a>
              </div>
            </Link>
          </>
        )}
      </nav>
    </>
  );
};

export default Layout;
