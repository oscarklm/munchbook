import '../styles/index.css';
import Store from '../components/Store';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Store>
      <Layout />
      <Component {...pageProps} />
    </Store>
  );
}

export default MyApp;
