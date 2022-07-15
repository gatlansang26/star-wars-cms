import 'bootstrap/dist/css/bootstrap.css' // add boostrap css
import 'bootstrap-icons/font/bootstrap-icons.css' // adds bootstrap icons
import '../styles/globals.scss'

import { useEffect } from "react"
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap"); // adds bootstrap js
  }, []);

  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}

export default MyApp
