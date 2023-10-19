import { Container, Box, Typography, Button, Grid } from "@mui/material";
import React, { useState } from "react";
import responsive from "../../styles/responsive.module.css";
import ServiceGridSection from "../Commons/ServiceGridSection";
import Stripe from "../Commons/Stripe";
import res01 from "../../assets/images/res01.webp";
import res02 from "../../assets/images/res02.webp";
import res03 from "../../assets/images/res03.webp";
import res04 from "../../assets/images/res04.webp";
import res05 from "../../assets/images/res05.webp";
import res06 from "../../assets/images/res06.webp";
import res07 from "../../assets/images/res07.webp";
import res08 from "../../assets/images/res08.webp";
import res09 from "../../assets/images/res09.webp";
import res10 from "../../assets/images/res10.webp";
import res11 from "../../assets/images/res11.webp";
import res12 from "../../assets/images/res12.webp";
import res13 from "../../assets/images/res13.webp";
import res14 from "../../assets/images/res14.webp";
import res15 from "../../assets/images/res15.webp";
import res16 from "../../assets/images/res16.webp";
import res17 from "../../assets/images/res17.webp";
import new1 from "../../assets/images/new1.webp";
import house from "../../assets/images/house.webp";
import Testimonials from "../Home/Testimonials";
import tag01 from "../../assets/images/tag01.webp";
import Image from "next/image";
import { Poppins } from "next/font/google";
import styles from "../../styles/style.module.css";
import postNewsLetterForm from "@/service/newLetterService";
import { motion } from "framer-motion";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import Head from "next/head";
import ContactForm1 from "../Home/ContactForm1";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
function CommercialService() {
  const data = [
    {
      smallHeading: "SHORT INTRO ABOUT",
      mainHeading: "Roofs",
      para1:
        "If you’re not happy with your current business space or planning to expand your facility, it’s time to contact Hammer-On Studios. We specialize in offering end-to-end office renovation and expansion solutions optimized to solve your core problems. Thus, making us the optimal choice for your workplace renovation as the most effective office renovation contractor throughout New York.",
      src: res01,
    },
    {
      smallHeading: "SHORT INTRO ABOUT",
      mainHeading: "Floors",
      para1:
        "If you’re not happy with your current business space or planning to expand your facility, it’s time to contact Hammer-On Studios. We specialize in offering end-to-end office renovation and expansion solutions optimized to solve your core problems. Thus, making us the optimal choice for your workplace renovation as the most effective office renovation contractor throughout New York.",

      src: res02,
      order: true,
    },
    {
      smallHeading: "SHORT INTRO ABOUT",
      mainHeading: "Siding",
      para1:
        "If you’re not happy with your current business space or planning to expand your facility, it’s time to contact Hammer-On Studios. We specialize in offering end-to-end office renovation and expansion solutions optimized to solve your core problems. Thus, making us the optimal choice for your workplace renovation as the most effective office renovation contractor throughout New York.",

      src: res03,
    },
    {
      smallHeading: "SHORT INTRO ABOUT",
      mainHeading: "Retaining Walls",
      para1:
        "If you’re not happy with your current business space or planning to expand your facility, it’s time to contact Hammer-On Studios. We specialize in offering end-to-end office renovation and expansion solutions optimized to solve your core problems. Thus, making us the optimal choice for your workplace renovation as the most effective office renovation contractor throughout New York.",

      src: res04,
      order: true,
    },
    {
      smallHeading: "SHORT INTRO ABOUT",
      mainHeading: "Painting",
      para1:
        "If you’re not happy with your current business space or planning to expand your facility, it’s time to contact Hammer-On Studios. We specialize in offering end-to-end office renovation and expansion solutions optimized to solve your core problems. Thus, making us the optimal choice for your workplace renovation as the most effective office renovation contractor throughout New York.",

      src: res05,
    },
    {
      smallHeading: "SHORT INTRO ABOUT",
      mainHeading: "Kitchen and Bathroom Renovations",
      para1:
        "If you’re not happy with your current business space or planning to expand your facility, it’s time to contact Hammer-On Studios. We specialize in offering end-to-end office renovation and expansion solutions optimized to solve your core problems. Thus, making us the optimal choice for your workplace renovation as the most effective office renovation contractor throughout New York.",

      src: res06,
      order: true,
    },
    {
      smallHeading: "SHORT INTRO ABOUT",
      mainHeading: "Basement Remodeling",
      para1:
        "If you’re not happy with your current business space or planning to expand your facility, it’s time to contact Hammer-On Studios. We specialize in offering end-to-end office renovation and expansion solutions optimized to solve your core problems. Thus, making us the optimal choice for your workplace renovation as the most effective office renovation contractor throughout New York.",
      src: res07,
    },
    {
      smallHeading: "SHORT INTRO ABOUT",
      mainHeading: "Decks",
      para1:
        "If you’re not happy with your current business space or planning to expand your facility, it’s time to contact Hammer-On Studios. We specialize in offering end-to-end office renovation and expansion solutions optimized to solve your core problems. Thus, making us the optimal choice for your workplace renovation as the most effective office renovation contractor throughout New York.",

      src: res08,
      order: true,
    },
    {
      smallHeading: "SHORT INTRO ABOUT",
      mainHeading: "Crown Molding",
      para1:
        "If you’re not happy with your current business space or planning to expand your facility, it’s time to contact Hammer-On Studios. We specialize in offering end-to-end office renovation and expansion solutions optimized to solve your core problems. Thus, making us the optimal choice for your workplace renovation as the most effective office renovation contractor throughout New York.",

      src: res09,
    },
    {
      smallHeading: "SHORT INTRO ABOUT",
      mainHeading: "Attic Renovations",
      para1:
        "If you’re not happy with your current business space or planning to expand your facility, it’s time to contact Hammer-On Studios. We specialize in offering end-to-end office renovation and expansion solutions optimized to solve your core problems. Thus, making us the optimal choice for your workplace renovation as the most effective office renovation contractor throughout New York.",

      src: res10,
      order: true,
    },
    //   hi
    {
      smallHeading: "SHORT INTRO ABOUT",
      mainHeading: "Garage Renovations",
      para1:
        "If you’re not happy with your current business space or planning to expand your facility, it’s time to contact Hammer-On Studios. We specialize in offering end-to-end office renovation and expansion solutions optimized to solve your core problems. Thus, making us the optimal choice for your workplace renovation as the most effective office renovation contractor throughout New York.",

      src: res11,
    },
    {
      smallHeading: "SHORT INTRO ABOUT",
      mainHeading: "Building Sheds",
      para1:
        "If you’re not happy with your current business space or planning to expand your facility, it’s time to contact Hammer-On Studios. We specialize in offering end-to-end office renovation and expansion solutions optimized to solve your core problems. Thus, making us the optimal choice for your workplace renovation as the most effective office renovation contractor throughout New York.",

      src: res12,
      order: true,
    },
    {
      smallHeading: "SHORT INTRO ABOUT",
      mainHeading: "Room Expansions",
      para1:
        "If you’re not happy with your current business space or planning to expand your facility, it’s time to contact Hammer-On Studios. We specialize in offering end-to-end office renovation and expansion solutions optimized to solve your core problems. Thus, making us the optimal choice for your workplace renovation as the most effective office renovation contractor throughout New York.",

      src: res13,
    },
    {
      smallHeading: "SHORT INTRO ABOUT",
      mainHeading: "Closet Expansions",
      para1:
        "If you’re not happy with your current business space or planning to expand your facility, it’s time to contact Hammer-On Studios. We specialize in offering end-to-end office renovation and expansion solutions optimized to solve your core problems. Thus, making us the optimal choice for your workplace renovation as the most effective office renovation contractor throughout New York.",

      src: res14,
      order: true,
    },
    {
      smallHeading: "SHORT INTRO ABOUT",
      mainHeading: "Carpentry",
      para1:
        "If you’re not happy with your current business space or planning to expand your facility, it’s time to contact Hammer-On Studios. We specialize in offering end-to-end office renovation and expansion solutions optimized to solve your core problems. Thus, making us the optimal choice for your workplace renovation as the most effective office renovation contractor throughout New York.",

      src: res15,
    },
    {
      smallHeading: "SHORT INTRO ABOUT",
      mainHeading: "Patios",
      para1:
        "If you’re not happy with your current business space or planning to expand your facility, it’s time to contact Hammer-On Studios. We specialize in offering end-to-end office renovation and expansion solutions optimized to solve your core problems. Thus, making us the optimal choice for your workplace renovation as the most effective office renovation contractor throughout New York.",

      src: res16,
      order: true,
    },
    {
      smallHeading: "SHORT INTRO ABOUT",
      mainHeading: "Pergolas",
      para1:
        "If you’re not happy with your current business space or planning to expand your facility, it’s time to contact Hammer-On Studios. We specialize in offering end-to-end office renovation and expansion solutions optimized to solve your core problems. Thus, making us the optimal choice for your workplace renovation as the most effective office renovation contractor throughout New York.",

      src: res17,
    },
  ];
  const style = {
    margins: {
      marginY: "2rem",
    },
    boxSetting: {
      marginY: "4rem",
    },
    buton: {
      marginY: "1rem",
      color: "white",
      paddingY: "0.5rem",
      fontSize: "1rem",
      backgroundColor: "white",
      color: "#393738",
      marginTop: "2rem",
      ":hover": {
        backgroundColor: "white",
      },
    },
    three: {
      display: "flex",
      flexDirection: "row",
      gap: "1rem",

      alignItems: "center",
    },
    h4: {
      color: "#393738",
      fontSize: "14px",
      fontWeight: 700,
      marginBottom: "10px",
      letterSpacing: "1px",
      position: "relative",
      paddingLeft: "30px",
      lineHeight: "21px",
      "::before": {
        content: "' '",
        position: "absolute",
        height: "3px",
        width: "21px",
        top: "9px",
        left: 0,
        backgroundColor: "#2871ae",
      },
    },
    h3: {
      fontSize: "30px",
      lineHeight: "46px",
      fontStyle: "normal",
      fontWeight: 800,
    },
    image: {
      backgroundImage: `url(${tag01.src})`,
      backgroundPosition: "top right",
      backgroundRepeat: "repeat",
      opacity: 1,
      transition: "background 0.3s, border-radius 0.3s, opacity 0.3s",
    },
  };
  //name feild
  const [name, setName] = useState("");

  const nameHandler = (e) => {
    const value = e.target.value;
    setName(value);
  };
  //email
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const validateEmail = (input) => {
    // Regular expression to validate email addresses
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(input);
  };

  const handleInputChangeEmail = (event) => {
    const inputValue = event.target.value;
    setEmail(inputValue);
    setIsValidEmail(validateEmail(inputValue));
  };
  const handleSubmit = () => {
    if (name && isValidEmail) {
      postNewsLetterForm({
        name: name,
        email: email,
      });
      setName("");
      setEmail("");
      console.log("data sent");
    } else {
      console.log("Invalid  submission");
    }
  };
  const [active, setActive] = useState(false);
  const enter = () => {
    setActive(true);
  };
  const out = () => {
    setActive(false);
  };
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.webp" />
      </Head>
      <Box sx={style.image}>
        <Stripe heading="RESIDENTIAL SERVICE" />
        <Container className={responsive.container}>
          <Box sx={style.margins}>
            {data.map((data, index) => {
              return (
                <ServiceGridSection
                  smallHeading={data.smallHeading}
                  mainHeading={data.mainHeading}
                  para1={data.para1}
                  para2={data.para2}
                  order={data.order}
                  src={data.src}
                  key={index}
                />
              );
            })}
          </Box>
        </Container>
        <Testimonials />
        <ContactForm1 />
      </Box>
    </>
  );
}

export default CommercialService;
