import React from "react";
import Layout from "../Components/Layout";
import Stripe from "../Components/Commons/Stripe";
import FourHoverCards from "../Components/Commons/FourHoverCards";
import WhatWeDo from "../Components/Home/WhatWeDo";
import Testimonials from "../Components/Home/Testimonials";

function myservices() {
  return (
    <>
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
