import PrivacyPolicy from "@/Components/privacy/PrivacyPolicy";
import Head from "next/head";
import React from "react";

function privacy() {
  return (
    <>
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-4XF3Y3MXGZ"
        ></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          {function gtag() {
            dataLayer.push(arguments);
          }}
          gtag('js', new Date()); gtag('config', 'G-4XF3Y3MXGZ');
        </script>
        <link rel="icon" href="/favicon.webp" />
        <title>Privacy Policy</title>
      </Head>
      <PrivacyPolicy />
    </>
  );
}

export default privacy;
