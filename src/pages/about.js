import AboutContent from "@/Components/About/AboutContent";
import StripSection from "@/Components/About/StripSection";
import Testimonials from "@/Components/Home/Testimonials";
import Layout from "@/Components/Layout";
import React from "react";

function about() {
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
        <title>About</title>
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
