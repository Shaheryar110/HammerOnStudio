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
