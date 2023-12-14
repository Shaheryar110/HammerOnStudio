import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-6ZHJ2LJG7C"
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            {function gtag() {
              dataLayer.push(arguments);
            }}
            gtag('js', new Date()); gtag('config', 'G-6ZHJ2LJG7C');
          `,
          }}
        />
        <script
          src="https://cdn.userway.org/widget.js"
          data-account="MDH5wuVUUW"
        ></script>
        <link rel="icon" type="image/x-icon" href="/favicon.webp" />
        <script
          type="text/javascript"
          src="//pl21780114.toprevenuegate.com/d7/87/78/d787785326d86c48232cd590cd299353.js"
        ></script>
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
