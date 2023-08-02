import StripSection from "@/Components/Commons/Stripe";
import Form from "@/Components/Contact/Form";
import Testimonials from "@/Components/Home/Testimonials";
import Layout from "@/Components/Layout";
import React from "react";

function contact() {
  return (
    <Layout>
      <StripSection heading="CONTACT US" />
      <Form />
      <Testimonials />
    </Layout>
  );
}

export default contact;
