import TermsAndCondition from "@/Components/Terms/TermsAndCondition";
import Head from "next/head";
import Script from "next/script";
import React from "react";

function terms() {
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
        <title>Terms And Condition</title>
      </Head>
      <TermsAndCondition />
    </>
  );
}

export default terms;
