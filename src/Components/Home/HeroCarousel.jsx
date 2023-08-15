import Image from "next/image";
import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import slider1 from "../../assets/images/slider-1.webp";
// import slider1 from "../../assets/images/card2.webp";
import slider2 from "../../assets/images/slid.webp";
import { Box, Button, Container, Typography } from "@mui/material";
import responsive from "../../styles/responsive.module.css";
import { motion, easeIn } from "framer-motion";

function HeroCarousel() {
  const style = {
    overText: {
      position: "absolute",
      width: "60%",
      top: "11.5rem",
      left: "15rem",
      right: 0,
      bottom: 0,
      textAlign: "left",
    },
    subBox: { textAlign: "left" },
    welcome: {
      textAlign: "left",
      animation: "text-appear 1.2s linear forwards",
      animationDelay: "0.7s",
      color: "white",
      fontSize: "1.34rem",
      fontWeight: 600,
      letterSpacing: "4px",
    },
    ComName: {
      textAlign: "left",
      animation: "text-appear 1.2s linear forwards",
      animationDelay: "0.7s",
      fontWeight: 900,
      fontSize: "80px",
      color: "white",
      " :: before": {
        content: "' '",
        position: "absolute",
        backgroundColor: "rgb(238, 33, 43)",
        color: "rgb(255, 255, 255)",
        width: "5px",
        height: "94px",
        left: "-15px",
      },
    },
    para: {
      fontSize: "18px",
      color: "white",
      textAlign: "left",
      marginY: "1rem",
    },
    button: {
      marginY: "3rem",
      backgroundColor: "#1E558C",
      color: "white",
      paddingX: "1.5rem",
      paddingY: "1rem",
      fontSize: "1rem",
    },
  };

  return (
    <Carousel
      showArrows={true}
      showIndicators={false}
      infiniteLoop={true}
      showThumbs={false}
    >
      <div style={{ position: "relative" }}>
        <Image
          src={slider1}
          width={1920}
          height={730}
          style={{ width: "1920px", height: "730px" }}
        />
        <Container className={responsive.container}>
          <Box sx={style.overText}>
            <Box sx={style.subBox}>
              <Typography variant="h5" sx={style.welcome}>
                Welcome To
              </Typography>
              <motion.div
                initial={{ x: -200, opacity: 0 }} // Initial position outside the left side of the screen with opacity 0
                animate={{ x: 0, opacity: 1 }} // Final position (its actual position) with opacity 1
                transition={{ duration: 1, type: "easeIn", delay: 1 }} // Animation duration, easing, and delay
              >
                <Typography variant="h3" sx={style.ComName}>
                  Hammer-On Studios!
                </Typography>
              </motion.div>
            </Box>
            <Typography sx={style.para}>
              Your Ultimate Hub For Intricate Repairs, Exquisite Renovations,
              And More! <br /> At Hammer-On Studios, We Provide A Perfect
              Solution For Servicing Your Remodeling Needs To Secure <br />
              Your Property’s Future.
            </Typography>
            <Button variant="contained" sx={style.button}>
              READ MORE
            </Button>
          </Box>
        </Container>
      </div>
      <div>
        <Image src={slider2} width={1920} height={730} />
        <Container className={responsive.container}>
          <Box sx={style.overText}>
            <Box sx={style.subBox}>
              <Typography variant="h5" sx={style.welcome}>
                Welcome To
              </Typography>
              <Typography variant="h3" sx={style.ComName}>
                Hammer-On Studios!
              </Typography>
            </Box>
            <Typography sx={style.para}>
              Your Ultimate Hub For Intricate Repairs, Exquisite Renovations,
              And More! <br /> At Hammer-On Studios, We Provide A Perfect
              Solution For Servicing Your Remodeling Needs To Secure <br />
              Your Property’s Future.
            </Typography>
            <Button variant="contained" sx={style.button}>
              READ MORE
            </Button>
          </Box>
        </Container>
      </div>
    </Carousel>
  );
}

export default HeroCarousel;
