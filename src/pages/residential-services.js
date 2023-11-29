import Layout from "@/Components/Layout";
import ResidentialService from "@/Components/services/ResidentialService";
import Head from "next/head";
import Script from "next/script";
import React from "react";

function residentialService() {
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
        <title>
          Flat Roof Repair Services In Dutchess County | Hammer On Studios
        </title>
        <meta
          property="og:title"
          content="Flat Roof Repair Services In Dutchess County | Hammer On Studios"
          key="title"
        />
        <meta
          name="description"
          content="Hammer On Studios Specializes In Flat Roof Repair Services In Dutchess County, Delivering Top-Notch Solutions For Lasting Protection."
        />
      </Head>
      <Layout>
        <ResidentialService />
      </Layout>
    </>
  );
}

export default residentialService;
