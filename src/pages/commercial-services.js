import Layout from "@/Components/Layout";
import CommercialService from "@/Components/services/CommercialService";
import Head from "next/head";
import Script from "next/script";
import React from "react";

function commercialService() {
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
export async function getServerSideProps() {
  const about = "about";

  return {
    props: { about },
  };
}
