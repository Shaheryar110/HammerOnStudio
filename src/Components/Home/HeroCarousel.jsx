import Image from "next/image";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import slider1 from "../../assets/images/slider-1.webp";
import slider2 from "../../assets/images/slid.webp";
import { Box, Button, Container, Typography } from "@mui/material";
import responsive from "../../styles/responsive.module.css";
import { motion } from "framer-motion";

function HeroCarousel() {
  const style = {
    overText: {
      position: "absolute",
      width: { md: "60%", xs: "70%" },
      top: { md: "11.5rem", xs: "2.5rem" },
      left: { lg: "15rem", md: "10rem", xs: "5rem" },
      right: 0,
      bottom: 0,
      textAlign: "left",
      height: "100%",
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
      fontSize: { lg: "80px", md: "50px", xs: "30px" },
      color: "white",
      " :: before": {
        content: "' '",
        position: "absolute",
        backgroundColor: "rgb(238, 33, 43)",
        color: "rgb(255, 255, 255)",
        width: "5px",
        height: { lg: "94px", md: "60px", xs: "40px" },
        left: "-15px",
      },
    },
    para: {
      fontSize: { md: "18px", xs: "13px" },
      color: "white",
      textAlign: "left",
      marginY: "1rem",
    },
    button: {
      marginY: { md: "3rem", xs: "0px" },
      backgroundColor: "#1E558C",
      color: "white",
      paddingX: "1.5rem",
      paddingY: { md: "1rem", xs: "10px" },
      fontSize: "1rem",
    },
    largescreen: {
      display: { md: "block", xs: "none" },
    },
    smallScreen: {
      display: { md: "none", xs: "block" },
    },
  };

  return (
    <>
      <Box sx={style.largescreen}>
        <Carousel
          showArrows={true}
          showIndicators={false}
          infiniteLoop={true}
          showThumbs={false}
        >
          <div style={{ position: "relative" }}>
            <Image
              src={slider1}
              style={{ width: "100%" }}
              width={1920}
              height={730}
            />
            <Container className={responsive.container}>
              <Box sx={style.overText}>
                <Box sx={style.subBox}>
                  <Typography variant="h5" sx={style.welcome}>
                    Welcome To
                  </Typography>
                  <motion.div
                    initial={{ x: -200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, type: "easeIn", delay: 1 }}
                  >
                    <Typography variant="h3" sx={style.ComName}>
                      Hammer-On Studios!
                    </Typography>
                  </motion.div>
                </Box>
                <Typography sx={style.para}>
                  Your Ultimate Hub For Intricate Repairs, Exquisite
                  Renovations, And More! <br /> At Hammer-On Studios, We Provide
                  A Perfect Solution For Servicing Your Remodeling Needs To
                  Secure <br />
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
                  Your Ultimate Hub For Intricate Repairs, Exquisite
                  Renovations, And More! <br /> At Hammer-On Studios, We Provide
                  A Perfect Solution For Servicing Your Remodeling Needs To
                  Secure <br />
                  Your Property’s Future.
                </Typography>
                <Button variant="contained" sx={style.button}>
                  READ MORE
                </Button>
              </Box>
            </Container>
          </div>
        </Carousel>
      </Box>
      <Box sx={style.smallScreen}>
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          <Image
            src={slider1}
            style={{ width: "100%", height: "500px" }}
            width={1920}
            height={730}
            loading="eager"
          />
          <Container className={responsive.container}>
            <Box sx={style.overText}>
              <Box sx={style.subBox}>
                <Typography variant="h5" sx={style.welcome}>
                  Welcome To
                </Typography>
                <motion.div
                  initial={{ x: -200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, type: "easeIn", delay: 1 }}
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
      </Box>
    </>
  );
}

export default HeroCarousel;
