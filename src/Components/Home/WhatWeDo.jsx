import { Container, Box, Typography, Stack, Grid, Button } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import responsive from "../../styles/responsive.module.css";
import styles from "../../styles/style.module.css";
import sbg from "../../assets/images/sbg.webp";
import services from "../../assets/images/services01.webp";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { Inter } from "next/font/google";
import cardSvg1 from "../../assets/images/cardsvg1.webp";
import cardSvg2 from "../../assets/images/cardsvg2.webp";
import card2 from "../../assets/images/card2.webp";
import { motion } from "framer-motion";
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

function WhatWeDo() {
  const style = {
    container: {
      maxWidth: { xl: "1300px" },
    },
    bgMain: {
      backgroundColor: "#191818",
      backgroundImage: `url(${sbg.src})`,
      backgroundPosition: "bottom center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      padding: "6rem 0",
    },
    ic: {
      color: "#393738",
      fontSize: "1rem",
    },
    h4: {
      color: "#fff",
      fontSize: "14px",
      fontWeight: 700,
      marginBottom: "10px",
      letterSpacing: "1px",
      fontFamily: "Inter, sans-serif",
      position: "relative",
      paddingLeft: "30px",
      lineHeight: "21px",
      "&::before": {
        content: '""',
        height: "3px",
        width: "21px",
        backgroundColor: "#2871ae",
        position: "absolute",
        top: "9px",
        left: 0,
      },
    },
    h3: {
      fontSize: "36px",
      lineHeight: "46px",
      fontWeight: 1000,
      margin: "0px 0px 20px",
      color: "#fff",
    },
    par: {
      fontSize: "17px",
      fontWeight: 400,
      lineHeight: "1.7",
      fontFamily: "Roboto, sans-serif",
      margin: "30px 0",
      color: "white",
    },
    hThree: {
      fontWeight: 700,
      marginBottom: "12px",
      fontSize: "24px",
      color: "#393738",
      ":hover": {
        color: "#2871AE",
      },
    },
    paragraph: {
      marginTop: 0,
      color: "#7a7a7a",
      fontSize: "15px",
      marginBottom: 0,
    },
    btn: {
      color: "#000",
      marginTop: "13px",
      display: "inherit",
      border: "none",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "white",
      fontWeight: "600",
      ":hover": {
        color: "red",
      },
    },
    article: {
      position: "relative",
    },
    svg: {
      width: "100%",
      height: "40%",
      position: "relative",
      left: "-25px",
      top: "-65px",
    },
    artice: {
      padding: "0px 25px 25px 25px",
      position: "relative",
      transition: "all 0.5s ease",
      height: { md: "120px", sm: "130px", xs: "130px" },
      marginTop: "-4rem",
    },
  };
  const [hover, setHover] = useState(false);
  const onMouseEnter = () => {
    setHover(true);
  };
  const onMouseLeave = () => {
    setHover(false);
  };
  const [hover1, setHover1] = useState(false);
  const onMouseEnter1 = () => {
    setHover1(true);
  };
  const onMouseLeave1 = () => {
    setHover1(false);
  };
  return (
    <>
      <Stack className={styles.bgMain}>
        <Container sx={style.container}>
          <Grid container spacing={2}>
            <Grid item lg={6}>
              <Box className={styles.headings}>
                <Typography variant="h4" sx={style.h4}>
                  WHAT WE DO
                </Typography>
                <Typography
                  variant="h3"
                  sx={style.h3}
                  className={inter.className}
                >
                  At Hammer-On Studios, we specialize in offering residential
                  and building repair and renovation services.
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={6}>
              <Typography sx={style.par}>
                We provide facility renovation services that are designed to
                utilize your location in the best possible way, helping you
                improve the aesthetics, functionality, and value of your
                property.
              </Typography>
              <Typography sx={style.par}>
                From simple remodeling to adding an extension, Hammer-On Studios
                has adequate skills and knowledge to deliver all your projects
                on time and within budget.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            className={styles.card}
            columnSpacing={2}
            justifyContent="center"
          >
            <div className={styles.border}></div>
            <Grid item lg={5} md={6} sm={7} xs={12}>
              <Box className={styles.cardInfo}>
                <figure className={styles.fig}>
                  <Image
                    src={services}
                    fill={false}
                    style={{ width: "100%" }}
                  />
                </figure>
                <Box sx={{ position: "relative" }}>
                  <Box sx={style.svg}>
                    <Image
                      src={cardSvg1}
                      fill={false}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </Box>
                </Box>
                <motion.div
                  animate={{ y: hover1 ? -40 : 0 }}
                  transition={{ duration: 0.5 }}
                  onMouseEnter={onMouseEnter1}
                  onMouseLeave={onMouseLeave1}
                >
                  <Box sx={style.artice}>
                    <Typography variant="h3" sx={style.hThree}>
                      Commercial Services
                    </Typography>
                    <Typography sx={style.paragraph}>
                      Hammer-On Studios supports commercial locations with
                      top-quality renovation services tailored to our clients’
                      eclectic needs. From breweries and restaurants to…
                    </Typography>
                    <Button sx={style.btn}>
                      Read More <KeyboardDoubleArrowRightIcon sx={style.ic} />
                    </Button>
                  </Box>
                </motion.div>
              </Box>
            </Grid>
            <Grid item lg={5} md={6} sm={7} xs={12}>
              <Box className={styles.cardInfo}>
                <figure className={styles.fig}>
                  <Image src={card2} fill={false} style={{ width: "100%" }} />
                </figure>
                <Box sx={{ position: "relative" }}>
                  <Box sx={style.svg}>
                    <Image
                      src={cardSvg2}
                      fill={false}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </Box>
                </Box>
                <motion.div
                  animate={{ y: hover ? -40 : 0 }}
                  transition={{ duration: 0.5 }}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                >
                  <Box sx={style.artice}>
                    <Typography variant="h3" sx={style.hThree}>
                      Residential Services
                    </Typography>
                    <Typography sx={style.paragraph}>
                      Hammer-On Studios supports commercial locations with
                      top-quality renovation services tailored to our clients’
                      eclectic needs. From breweries and restaurants to…
                    </Typography>
                    <Button sx={style.btn}>
                      Read More <KeyboardDoubleArrowRightIcon sx={style.ic} />
                    </Button>
                  </Box>
                </motion.div>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Stack>
    </>
  );
}

export default WhatWeDo;
