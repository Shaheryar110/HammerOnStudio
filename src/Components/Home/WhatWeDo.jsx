import { Container, Box, Typography, Stack, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import responsive from "../../styles/responsive.module.css";
import styles from "../../styles/style.module.css";
import sbg from "../../assets/images/sbg.png";
import services from "../../assets/images/services01.webp";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
// import top from "../../Components/svg/top.svg";
// import bottomSvg from "../../../public/bottom.svg";
// import bottomSvgW from "../../../public/bottomw.svg";

function WhatWeDo() {
  const style = {
    bgMain: {
      backgroundColor: "#191818",
      backgroundImage: `url(${sbg.src})`,
      backgroundPosition: "bottom center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      padding: "6rem 0",
    },
    ic: {
      color: "black",
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
      fontFamily: "Inter, sans-serif",
      fontSize: "30px",
      lineHeight: "46px",
      fontWeight: 800,
      fontStyle: "normal",
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
  };
  return (
    <>
      <Stack className={styles.bgMain}>
        <Container sx={responsive.container}>
          <Grid container spacing={2}>
            <Grid item lg={6}>
              <Box className={styles.headings}>
                <Typography variant="h4" sx={style.h4}>
                  WHAT WE DO
                </Typography>
                <Typography variant="h3" sx={style.h3}>
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
          <Grid container className={styles.card} columnSpacing={2}>
            <div className={styles.border}></div>
            <Grid item lg={4}>
              <Box className={styles.cardInfo}>
                <figure className={styles.fig}>
                  <Image src={services} />
                </figure>
                {/* <div class="svg-content">
                  <Image src={top} />
                  {/* <Image src={bottomSvg} />
                  <Image src={bottomSvgW} /> */}
                <article className={styles.article}>
                  {/* <div className={styles.iconic}>
                    <HomeOutlinedIcon />
                  </div> */}
                  <Typography variant="h3" className={styles.hThree}>
                    Commercial Services
                  </Typography>
                  <Typography className={styles.paragraph}>
                    Hammer-On Studios supports commercial locations with
                    top-quality renovation services tailored to our clients’
                    eclectic needs. From breweries and restaurants to…
                  </Typography>
                  <button className={styles.btn}>
                    Read More <KeyboardArrowRightOutlinedIcon sx={style.ic} />
                  </button>
                </article>
              </Box>
            </Grid>
            <Grid item lg={4}>
              <Box className={styles.cardInfo}>
                <figure className={styles.fig}>
                  <Image src={services} />
                </figure>
                {/* <div class="svg-content">
                  <Image src={top} />
                  {/* <Image src={bottomSvg} />
                  <Image src={bottomSvgW} /> */}
                <article className={styles.article}>
                  {/* <div className={styles.iconic}>
                    <HomeOutlinedIcon />
                  </div> */}
                  <Typography variant="h3" className={styles.hThree}>
                    Residential Services
                  </Typography>
                  <Typography className={styles.paragraph}>
                    Hammer-On Studios’ home renovation services assist you in
                    meeting all your remodeling ambitions seamlessly. We
                    transform your living space with…
                  </Typography>
                  <button className={styles.btn}>
                    Read More <KeyboardArrowRightOutlinedIcon sx={style.ic} />
                  </button>
                </article>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Stack>
    </>
  );
}

export default WhatWeDo;
