import Contact from "@/Components/Home/Contact";
import ContactForm1 from "@/Components/Home/ContactForm1";
import Gallery from "@/Components/Home/Gallery";
import HeroCarousel from "@/Components/Home/HeroCarousel";
import ReadyToGetCard from "@/Components/Home/ReadyToGetCard";
import RepariAndRenovation from "@/Components/Home/RepariAndRenovation";
import Testimonials from "@/Components/Home/Testimonials";
import WhatWeDo from "@/Components/Home/WhatWeDo";
import WorkSection from "@/Components/Home/WorkSection";
import Layout from "@/Components/Layout";
import Head from "next/head";
import Script from "next/script";
import { webSchema } from "@/Schema/WebsiteSchema";
import { orgSchema } from "@/Schema/OrgSchema";
import { BissunessSchema } from "@/Schema/OrgSchema";

export default function Home() {
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
        <title>
          Office Renovation Contractor | Flat Roof Repair Nyc | Hammer On
          Studios
        </title>
        <meta
          property="og:title"
          content="Office Renovation Contractor | Flat Roof Repair Nyc | Hammer On Studios"
          key="title"
        />
        <meta
          name="description"
          content="Hammer On Studios Is Your Trusted Office Renovation Contractor And Flat Roof Repair Expert In NYC, Transforming Spaces For Success."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.webp" />
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSchema) }}
        />
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(BissunessSchema) }}
        />
      </Head>
      <main>
        <Layout>
          <HeroCarousel />
          <RepariAndRenovation />
          <WhatWeDo />
          <WorkSection />
          <ReadyToGetCard />
          <Gallery />
          <Testimonials />
          <Contact />
          <ContactForm1 />
        </Layout>
      </main>
    </>
  );
}
