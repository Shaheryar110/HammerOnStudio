import "@/styles/globals.css";
import NextTopLoader from "nextjs-toploader";
import axios from "axios";
import Script from "next/script";
import https from "https";

axios.defaults.httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});
export default function App({ Component, pageProps }) {
  return (
    <>
      <NextTopLoader />
      <Component {...pageProps} />
      {/* <Script strategy="beforeInteractive" type='text/javascript' src="//pl21780114.toprevenuegate.com/d7/87/78/d787785326d86c48232cd590cd299353.js"  /> */}
      {/* <script type='text/javascript' src='//pl21780114.toprevenuegate.com/d7/87/78/d787785326d86c48232cd590cd299353.js'></script> */}
    </>
  );
}
