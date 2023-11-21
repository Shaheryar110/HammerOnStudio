import PrivacyPolicy from "@/Components/privacy/PrivacyPolicy";
import Head from "next/head";
import Script from "next/script";
import React from "react";

function privacy() {
  return (
    <>
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-6ZHJ2LJG7C"
        ></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          {function gtag() {
            dataLayer.push(arguments);
          }}
          gtag('js', new Date()); gtag('config', 'G-6ZHJ2LJG7C');
        </script>
        <link rel="icon" href="/favicon.webp" />
        <title>Privacy Policy</title>
      </Head>
      <PrivacyPolicy />
    </>
  );
}

export default privacy;
