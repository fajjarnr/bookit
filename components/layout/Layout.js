import Head from 'next/head';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Footer from './Footer';
import Header from './Header';

function Layout({ children, title = 'Book Best Hotels for Your Holiday' }) {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
      </Head>

      <Header />
      <ToastContainer position="bottom-right" />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
