import Layout from "@/Components/Layout";
import CommercialService from "@/Components/services/CommercialService";
import Head from "next/head";
import Script from "next/script";
import React from "react";

function commercialService() {
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
          Commercial Bathroom Remodeling Contractors In New York | Hammer On
          Studios
        </title>
        <meta
          property="og:title"
          content="Commercial Bathroom Remodeling Contractors In New York | Hammer On Studios"
          key="title"
        />
        <meta
          name="description"
          content="Hammer On Studios, The Top Commercial Bathroom Remodeling Contractors In New York, Enhancing Your Space And Functionality."
        />
      </Head>
      <Layout>
        <CommercialService />
      </Layout>
    </>
  );
}

export default commercialService;
