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
import { BissunessSchema } from "../Schema/LocalBissunessSchema";

export default function Home() {
  return (
    <>
      <Head>
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
        <script
          id="schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "WebSite",
              name: "Hammer On Studios",
              url: "https://hammeronstudios.com/",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://hammeronstudios.com/{search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        ></script>
        <script
          id="schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Hammer On Studios",
              alternateName: "Hammer On Studios",
              url: "https://hammeronstudios.com/",
              logo: "https://hammeronstudios.com/_next/static/media/logo.395bb741.webp",
              sameAs: [
                "https://www.facebook.com/HammerOnStudios",
                "https://www.instagram.com/hammeronstudiosllc/",
              ],
            }),
          }}
        ></script>
        <script
          id="schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(BissunessSchema) }}
        ></script>
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
      </Head>
      <div></div>
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
