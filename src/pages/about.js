import AboutContent from "@/Components/About/AboutContent";
import StripSection from "@/Components/About/StripSection";
import Testimonials from "@/Components/Home/Testimonials";
import Layout from "@/Components/Layout";
import Head from "next/head";
import Script from "next/script";
import React from "react";

function about() {
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
          Custom Commercial Office Remodeling In Nyc | Hammer On Studios
        </title>
        <meta
          property="og:title"
          content="Custom Commercial Office Remodeling In Nyc | Hammer On Studios"
          key="title"
        />
        <meta
          name="description"
          content="Hammer On Studios Specializes In Custom Commercial Office Remodeling In NYC, Crafting Spaces That Inspire Productivity And Creativity."
        />
      </Head>
      <Layout>
        <StripSection />
        <AboutContent />
        <Testimonials />
      </Layout>
    </>
  );
}

export default about;
