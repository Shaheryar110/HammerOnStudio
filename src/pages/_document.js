import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-4XF3Y3MXGZ"
        ></Script>
        <Script>
          window.dataLayer = window.dataLayer || [];
          {function gtag() {
            dataLayer.push(arguments);
          }}
          gtag('js', new Date()); gtag('config', 'G-4XF3Y3MXGZ');
        </Script>
        <Script
          src="https://cdn.userway.org/widget.js"
          data-account="MDH5wuVUUW"
        ></Script>
        <link rel="icon" type="image/x-icon" href="/favicon.webp" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
