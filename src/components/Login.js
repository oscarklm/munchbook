import { useContext, useState } from 'react';
import { MagicContext, LoggedInContext, LoadingContext } from './Store';
import Router from 'next/router';
import Link from 'next/link';

const Login = () => {
  const [loggedIn, setLoggedIn] = useContext(LoggedInContext);
  const [isLoading, setIsLoading] = useContext(LoadingContext);
  const [email, setEmail] = useState('');
  const [magic] = useContext(MagicContext);
  const [errorMsg, setErrorMsg] = useState('');
  const [disableLogin, setDisableLogin] = useState(false);

  const authenticateWithDb = async (DIDT) => {
    /* Pass the Decentralized ID token in the Authorization header to the database */
    let res = await fetch(`/api/user/login`, {
      method: 'POST',
      headers: new Headers({
        Authorization: 'Bearer ' + DIDT
      })
    });

    let data = await res.json();

    /* If the user is authorized, return an object containing the user properties (issuer, publicAddress, email) */
    /* Else, the login was not successful and return false */
    return data.authorized ? data.user : false;
  };

  const handleLogin = async () => {
    try {
      /* disable the login button to prevent users from clicking it multiple times, triggering mutliple emails */
      setDisableLogin(true);

      /* Get DID Token returned from when the email link is clicked */
      const DIDT = await magic.auth.loginWithMagicLink({ email });

      /* `user` will be the user object returned from the db, or `false` if the login failed */
      let user = await authenticateWithDb(DIDT);

      if (user) {
        setLoggedIn(user.email);
        Router.push('/');
      }
    } catch (err) {
      /* If the user clicked "cancel", allow them to click the login again */
      setDisableLogin(false);

      /* Handle error (which can occur if the user clicks `Cancel` on the modal after submitting their email) */
      console.log(`Error logging in with Magic, ${err}`);
    }
  };

  return (
    <>
      {isLoading ? ( // if fetching data, show a loading symbol
        <img
          className="loading-gif"
          src="/loading.gif"
          alt="loading..."
          height="35px"
          alt="Loading..."
        />
      ) : loggedIn ? ( // If the user is logged in, show a link to the home page
        <>
          You're already logged in! Click <Link href="/">here</Link> to view
          your Todos.
        </>
      ) : (
        <div className="max-w-md gap-2 p-4 m-auto">
          <h4 className="my-4 text-3xl font-medium text-center text-gray-600">
            Log into your account
          </h4>
          <form className="w-full">
            <input
              className="w-full h-10 p-2 border-2"
              type="email"
              value={email}
              placeholder="your@email.com"
              onFocus={(e) => {
                e.target.placeholder = '';
              }}
              onChange={(e) => {
                setErrorMsg(''); // remove error msg
                setEmail(e.target.value);
              }}
            />
            <div className="error-msg">{errorMsg}</div>
            <input
              className="w-full p-2 mt-4 font-bold text-gray-200 bg-gray-800 rounded-lg cursor-pointer hover:bg-blue-500"
              type="submit"
              value="Log in"
              disabled={disableLogin}
              onClick={(e) => {
                e.preventDefault();
                if (!email) return setErrorMsg('Email cannot be empty.');
                handleLogin();
              }}
            />
          </form>
        </div>
      )}
    </>
  );
};

export default Login;
