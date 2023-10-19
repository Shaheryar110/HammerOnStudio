import Blogs from "@/Components/Blogs/Blogs";
import Layout from "@/Components/Layout";
import Head from "next/head";
import Script from "next/script";
import React from "react";

function custome() {
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
        <title>Blogs</title>
      </Head>
      <Layout>
        <Blogs />
      </Layout>
    </>
  );
}

export default custome;
