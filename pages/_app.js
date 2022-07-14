import 'bootstrap/dist/css/bootstrap.css' // adds bootstrap css
import '../styles/globals.scss'

import { useEffect } from "react"

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap"); // adds bootstrap js
  }, []);

  return <Component {...pageProps} />
}

export default MyApp
