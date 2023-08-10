import AboutContent from "@/Components/About/AboutContent";
import StripSection from "@/Components/About/StripSection";
import FourHoverCards from "@/Components/Commons/FourHoverCards";
import Testimonials from "@/Components/Home/Testimonials";
import Layout from "@/Components/Layout";
import React from "react";

function about() {
  return (
    <Layout>
      <StripSection />
      <AboutContent />

      <Testimonials />
    </Layout>
  );
}

export default about;
