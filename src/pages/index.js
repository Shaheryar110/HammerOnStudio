import Contact from "@/Components/Home/Contact";
import ContactForm1 from "@/Components/Home/ContactForm1";
import HeroCarousel from "@/Components/Home/HeroCarousel";
import ReadyToGetCard from "@/Components/Home/ReadyToGetCard";
import RepariAndRenovation from "@/Components/Home/RepariAndRenovation";
import Testimonials from "@/Components/Home/Testimonials";
import WhatWeDo from "@/Components/Home/WhatWeDo";
import WorkSection from "@/Components/Home/WorkSection";
import Layout from "@/Components/Layout";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hammers On Studio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Layout>
          <HeroCarousel />
          <RepariAndRenovation />
          <WhatWeDo />
          <WorkSection />
          <ReadyToGetCard />
          <Testimonials />
          <Contact />
          <ContactForm1 />
        </Layout>
      </main>
    </>
  );
}
