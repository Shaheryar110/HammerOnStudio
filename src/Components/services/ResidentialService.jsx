import { Container, Box, Typography, Button, Grid } from "@mui/material";
import React, { useState } from "react";
import responsive from "../../styles/responsive.module.css";
import ServiceGridSection from "../Commons/ServiceGridSection";
import Stripe from "../Commons/Stripe";
import fourMen from "../../assets/images/img01.jpg";
import fourMen1 from "../../assets/images/const.png";
import fourMen2 from "../../assets/images/imgtav01.jpg";
import fourMen3 from "../../assets/images/tag03.webp";
import fourMen4 from "../../assets/images/const1.jpg";
import fourMen5 from "../../assets/images/imgtag-03.jpg";
import new1 from "../../assets/images/new1.webp";
import house from "../../assets/images/house.png";
import Testimonials from "../Home/Testimonials";
import tag01 from "../../assets/images/tag01.jpg";
import Image from "next/image";
import styles from "../../styles/style.module.css";
import postNewsLetterForm from "@/service/newLetterService";
import { motion } from "framer-motion";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

function CommercialService() {
  const data = [
    {
      smallHeading: "SHORT INTRO ABOUT",
      mainHeading: "Roofs",
      para1:
        "If you’re not happy with your current business space or planning to expand your facility, it’s time to contact Hammer-On Studios. We specialize in offering end-to-end office renovation and expansion solutions optimized to solve your core problems. Thus, making us the optimal choice for your workplace renovation as the most effective office renovation contractor throughout New York.",
      src: fourMen,
    },
    {
      smallHeading: "SHORT INTRO ABOUT",
      mainHeading: "Floors",
      para1:
        "If you’re not happy with your current business space or planning to expand your facility, it’s time to contact Hammer-On Studios. We specialize in offering end-to-end office renovation and expansion solutions optimized to solve your core problems. Thus, making us the optimal choice for your workplace renovation as the most effective office renovation contractor throughout New York.",

      src: fourMen1,
      order: true,
    },
    {
      smallHeading: "SHORT INTRO ABOUT",
      mainHeading: "Siding",
      para1:
        "If you’re not happy with your current business space or planning to expand your facility, it’s time to contact Hammer-On Studios. We specialize in offering end-to-end office renovation and expansion solutions optimized to solve your core problems. Thus, making us the optimal choice for your workplace renovation as the most effective office renovation contractor throughout New York.",

      src: fourMen2,
    },
    {
      smallHeading: "SHORT INTRO ABOUT",
      mainHeading: "Retaining Walls",
      para1:
        "If you’re not happy with your current business space or planning to expand your facility, it’s time to contact Hammer-On Studios. We specialize in offering end-to-end office renovation and expansion solutions optimized to solve your core problems. Thus, making us the optimal choice for your workplace renovation as the most effective office renovation contractor throughout New York.",

      src: fourMen3,
      order: true,
    },
    {
      smallHeading: "SHORT INTRO ABOUT",
      mainHeading: "Painting",
      para1:
        "If you’re not happy with your current business space or planning to expand your facility, it’s time to contact Hammer-On Studios. We specialize in offering end-to-end office renovation and expansion solutions optimized to solve your core problems. Thus, making us the optimal choice for your workplace renovation as the most effective office renovation contractor throughout New York.",

      src: fourMen4,
    },
    {
      smallHeading: "SHORT INTRO ABOUT",
      mainHeading: "Kitchen and Bathroom Renovations",
      para1:
        "If you’re not happy with your current business space or planning to expand your facility, it’s time to contact Hammer-On Studios. We specialize in offering end-to-end office renovation and expansion solutions optimized to solve your core problems. Thus, making us the optimal choice for your workplace renovation as the most effective office renovation contractor throughout New York.",

      src: fourMen5,
      order: true,
    },
    {
      smallHeading: "SHORT INTRO ABOUT",
      mainHeading: "Basement Remodeling",
      para1:
        "If you’re not happy with your current business space or planning to expand your facility, it’s time to contact Hammer-On Studios. We specialize in offering end-to-end office renovation and expansion solutions optimized to solve your core problems. Thus, making us the optimal choice for your workplace renovation as the most effective office renovation contractor throughout New York.",
      src: fourMen5,
    },
    {
      smallHeading: "SHORT INTRO ABOUT",
      mainHeading: "Decks",
      para1:
        "If you’re not happy with your current business space or planning to expand your facility, it’s time to contact Hammer-On Studios. We specialize in offering end-to-end office renovation and expansion solutions optimized to solve your core problems. Thus, making us the optimal choice for your workplace renovation as the most effective office renovation contractor throughout New York.",

      src: fourMen5,
      order: true,
    },
    {
      smallHeading: "SHORT INTRO ABOUT",
      mainHeading: "Crown Molding",
      para1:
        "If you’re not happy with your current business space or planning to expand your facility, it’s time to contact Hammer-On Studios. We specialize in offering end-to-end office renovation and expansion solutions optimized to solve your core problems. Thus, making us the optimal choice for your workplace renovation as the most effective office renovation contractor throughout New York.",

      src: fourMen5,
    },
    {
      smallHeading: "SHORT INTRO ABOUT",
      mainHeading: "Attic Renovations",
      para1:
        "If you’re not happy with your current business space or planning to expand your facility, it’s time to contact Hammer-On Studios. We specialize in offering end-to-end office renovation and expansion solutions optimized to solve your core problems. Thus, making us the optimal choice for your workplace renovation as the most effective office renovation contractor throughout New York.",

      src: fourMen5,
      order: true,
    },
    //   hi
    {
      smallHeading: "SHORT INTRO ABOUT",
      mainHeading: "Garage Renovations",
      para1:
        "If you’re not happy with your current business space or planning to expand your facility, it’s time to contact Hammer-On Studios. We specialize in offering end-to-end office renovation and expansion solutions optimized to solve your core problems. Thus, making us the optimal choice for your workplace renovation as the most effective office renovation contractor throughout New York.",

      src: fourMen5,
    },
    {
      smallHeading: "SHORT INTRO ABOUT",
      mainHeading: "Building Sheds",
      para1:
        "If you’re not happy with your current business space or planning to expand your facility, it’s time to contact Hammer-On Studios. We specialize in offering end-to-end office renovation and expansion solutions optimized to solve your core problems. Thus, making us the optimal choice for your workplace renovation as the most effective office renovation contractor throughout New York.",

      src: fourMen5,
      order: true,
    },
    {
      smallHeading: "SHORT INTRO ABOUT",
      mainHeading: "Room Expansions",
      para1:
        "If you’re not happy with your current business space or planning to expand your facility, it’s time to contact Hammer-On Studios. We specialize in offering end-to-end office renovation and expansion solutions optimized to solve your core problems. Thus, making us the optimal choice for your workplace renovation as the most effective office renovation contractor throughout New York.",

      src: fourMen5,
    },
    {
      smallHeading: "SHORT INTRO ABOUT",
      mainHeading: "Closet Expansions",
      para1:
        "If you’re not happy with your current business space or planning to expand your facility, it’s time to contact Hammer-On Studios. We specialize in offering end-to-end office renovation and expansion solutions optimized to solve your core problems. Thus, making us the optimal choice for your workplace renovation as the most effective office renovation contractor throughout New York.",

      src: fourMen5,
      order: true,
    },
    {
      smallHeading: "SHORT INTRO ABOUT",
      mainHeading: "Carpentry",
      para1:
        "If you’re not happy with your current business space or planning to expand your facility, it’s time to contact Hammer-On Studios. We specialize in offering end-to-end office renovation and expansion solutions optimized to solve your core problems. Thus, making us the optimal choice for your workplace renovation as the most effective office renovation contractor throughout New York.",

      src: fourMen5,
    },
    {
      smallHeading: "SHORT INTRO ABOUT",
      mainHeading: "Patios",
      para1:
        "If you’re not happy with your current business space or planning to expand your facility, it’s time to contact Hammer-On Studios. We specialize in offering end-to-end office renovation and expansion solutions optimized to solve your core problems. Thus, making us the optimal choice for your workplace renovation as the most effective office renovation contractor throughout New York.",

      src: fourMen5,
      order: true,
    },
    {
      smallHeading: "SHORT INTRO ABOUT",
      mainHeading: "Pergolas",
      para1:
        "If you’re not happy with your current business space or planning to expand your facility, it’s time to contact Hammer-On Studios. We specialize in offering end-to-end office renovation and expansion solutions optimized to solve your core problems. Thus, making us the optimal choice for your workplace renovation as the most effective office renovation contractor throughout New York.",

      src: fourMen5,
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
      <Box sx={style.image}>
        <Stripe heading="RESIDENTIAL SERVICE" />
        <Container className={responsive.container}>
          <Box sx={style.margins}>
            {data.map((data) => {
              return (
                <ServiceGridSection
                  smallHeading={data.smallHeading}
                  mainHeading={data.mainHeading}
                  para1={data.para1}
                  para2={data.para2}
                  order={data.order}
                  src={data.src}
                />
              );
            })}
          </Box>
        </Container>
        <Testimonials />
        <Grid container sx={{ justifyContent: "center", alignItems: "center" }}>
          <Grid item lg={3}>
            <Image src={new1} />
          </Grid>
          <Grid item lg={5}>
            <Box sx={style.boxSetting}>
              <Typography variant="h4" sx={style.h4}>
                CONTACT FORM
              </Typography>
              <Typography variant="h3" sx={style.h3}>
                Need Any Home Repair Help?
              </Typography>
              <Box sx={style.three}>
                <input
                  className={styles.feild}
                  placeholder="Name"
                  value={name}
                  onChange={nameHandler}
                />
                <input
                  className={styles.feild1}
                  placeholder="Email"
                  onChange={handleInputChangeEmail}
                  value={email}
                />
              </Box>
              <Button
                onClick={handleSubmit}
                sx={style.buton}
                className={poppins.className}
                onMouseEnter={enter}
                onMouseOut={out}
              >
                <motion.div
                  initial={{ x: 0, opacity: 0 }}
                  whileInView={{ opacity: 1, x: active ? -5 : 10 }}
                  transition={{ duration: 0.5 }}
                  onMouseEnter={enter}
                  onMouseOut={out}
                >
                  {" "}
                  SUBSCRIBE
                </motion.div>

                <motion.div
                  initial={{ x: -10, opacity: 0 }}
                  whileInView={{ opacity: active ? 1 : 0, x: -5 }}
                  transition={{ duration: 0.5 }}
                  onMouseEnter={enter}
                  onMouseOut={out}
                >
                  <KeyboardDoubleArrowRightIcon
                    sx={{
                      transition: "all ease 0.5s",
                      display: "flex",
                      alignSelf: "center",
                    }}
                  />
                </motion.div>
              </Button>
            </Box>
          </Grid>
          <Grid item lg={3}>
            <Image src={house} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default CommercialService;
