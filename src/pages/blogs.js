import Blogs from "@/Components/Blogs/Blogs";
import Layout from "@/Components/Layout";
import Head from "next/head";
import React from "react";

function blogs() {
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
        <title>Blogs</title>
      </Head>
      <Layout>
        <Blogs />
      </Layout>
    </>
  );
}

export default blogs;
