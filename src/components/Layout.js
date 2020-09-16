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
    await fetch(`/api/user/logout`, {
      method: 'GET'
    });
    setLoggedIn(false);
    await magic.user.logout();
  };

  return (
    <>
      <Head>
        <title>MunchBook</title>
      </Head>
      <nav className="flex items-center justify-between p-4 bg-gray-300 shadow-md sm:text-xl">
        <Link href="/">
          <img width="60" height="60" src="/img/logo.svg"></img>
        </Link>
        {/* If a user is logged in, show our Welcome message and Logout button */}
        {loggedIn ? (
          <>
            <div className="text-center">Welcome, {loggedIn}</div>
            <div className="inline-block px-5 py-4 font-bold text-gray-200 bg-gray-800 rounded-lg cursor-pointer hover:bg-red-700">
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
              <div className="inline-block px-5 py-4 font-bold text-gray-200 bg-gray-800 rounded-lg cursor-pointer hover:bg-blue-500">
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
