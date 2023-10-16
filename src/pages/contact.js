import StripSection from "@/Components/Commons/Stripe";
import Form from "@/Components/Contact/Form";
import Testimonials from "@/Components/Home/Testimonials";
import Layout from "@/Components/Layout";
import Head from "next/head";
import React from "react";

function contact() {
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
      </Head>
      <Layout>
        <StripSection heading="CONTACT US" />
        <Form />
        <Testimonials />
      </Layout>
    </>
  );
}

export default contact;
