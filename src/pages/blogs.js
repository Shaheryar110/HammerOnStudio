import Blogs from "@/Components/Blogs/Blogs";
import Layout from "@/Components/Layout";
import { URI } from "@/uri";
import Head from "next/head";
import Script from "next/script";
import React from "react";

function blogs() {
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
        <title>
          Quality Kitchen And Bath Remodels In Putnam County | Hammer On Studios
        </title>
        <meta
          property="og:title"
          content="Quality Kitchen And Bath Remodels In Putnam County | Hammer On Studios"
          key="title"
        />
        <meta
          name="description"
          content="Quality Kitchen And Bath Remodels In Putnam County, Expertly Crafted By The Team At Hammer On Studios."
        />
      </Head>
      <Layout>
        <Blogs />
      </Layout>
    </>
  );
}

export default blogs;
