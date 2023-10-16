import React from "react";
import Layout from "../Components/Layout";
import Stripe from "../Components/Commons/Stripe";
import FourHoverCards from "../Components/Commons/FourHoverCards";
import WhatWeDo from "../Components/Home/WhatWeDo";
import Testimonials from "../Components/Home/Testimonials";
import Head from "next/head";

function myservices() {
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
        <title>Services</title>
      </Head>
      <Layout>
        <Stripe heading="SERVICES" />
        <WhatWeDo />
        <Testimonials />
        <FourHoverCards />
      </Layout>
    </>
  );
}

export default myservices;
