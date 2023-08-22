import "@/styles/globals.css";
import NextTopLoader from "nextjs-toploader";
export default function App({ Component, pageProps }) {
  return (
    <>
      <NextTopLoader />
      <Component {...pageProps} />;
    </>
  );
}
