import 'tailwindcss/tailwind.css'
import Nav from '../components/Nav';
import StrapiComponent from '../components/strapi';
import {Fragment} from 'react';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Nav />
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp
