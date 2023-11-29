import Blogs from "@/Components/Blogs/Blogs";
import Layout from "@/Components/Layout";
import Head from "next/head";
import Script from "next/script";
import React from "react";

function custome() {
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
        <title>Blogs</title>
      </Head>
      <Layout>
        <Blogs />
      </Layout>
    </>
  );
}

export default custome;
