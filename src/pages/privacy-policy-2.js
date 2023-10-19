import PrivacyPolicy from "@/Components/privacy/PrivacyPolicy";
import Head from "next/head";
import Script from "next/script";
import React from "react";

function privacy() {
  return (
    <>
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
        <link rel="icon" href="/favicon.webp" />
        <title>Privacy Policy</title>
      </Head>
      <PrivacyPolicy />
    </>
  );
}

export default privacy;
