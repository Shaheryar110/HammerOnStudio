import TermsAndCondition from "@/Components/Terms/TermsAndCondition";
import Head from "next/head";
import Script from "next/script";
import React from "react";

function terms() {
  return (
    <>
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
        <link rel="icon" href="/favicon.webp" />
        <title>Terms And Condition</title>
      </Head>
      <TermsAndCondition />
    </>
  );
}

export default terms;
