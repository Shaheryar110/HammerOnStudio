import GetAQoute from "@/Components/Get-a-Qoute/GetAQoute";
import Layout from "@/Components/Layout";
import Head from "next/head";
import Script from "next/script";
import React from "react";

function getaqoute() {
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
      </Head>
      <Layout>
        <GetAQoute />
      </Layout>
    </>
  );
}

export default getaqoute;
