import Layout from "@/Components/Layout";
import ResidentialService from "@/Components/services/ResidentialService";
import Head from "next/head";
import React from "react";

function residentialService() {
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
        <title>Residential Service</title>
      </Head>
      <Layout>
        <ResidentialService />
      </Layout>
    </>
  );
}

export default residentialService;
