import StripSection from "@/Components/Commons/Stripe";
import Layout from "@/Components/Layout";
import React, { useRef } from "react";
import { Container, Box, Typography, Button, Grid } from "@mui/material";
import responsive from "../styles/responsive.module.css";
import Gallery from "@/Components/Home/Gallery";
import Testimonials from "@/Components/Home/Testimonials";
import { Inter } from "next/font/google";
import Head from "next/head";
import Script from "next/script";
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});
function work() {
  const style = {
    borders: {
      // borderColor:"#3772B0",
      borderTop: "3px solid #3772B0",
    },
    margiins: {
      marginY: "3rem",
    },
    tophead: {
      color: "#646464",
      marginBottom: "10px",
      letterSpacing: "1px",
      fontSize: "14px",
      fontWeight: 700,
      textAlign: "center",
    },
    mainhead: {
      color: "#393738",
      fontSize: "40px",
      fontWeight: 800,
      textAlign: "center",
    },
    spaces: {
      marginY: "5rem",
    },
    newText: {
      paddingY: "12px",
      opacity: 0.8,
      textAlign: "center",
      maxWidth: "500px",
    },
    newTxtBox: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };

  return (
    <>
      <Head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-4XF3Y3MXGZ"
        ></Script>
        <Script>
          window.dataLayer = window.dataLayer || [];
          {function gtag() {
            dataLayer.push(arguments);
          }}
          gtag('js', new Date()); gtag('config', 'G-4XF3Y3MXGZ');
        </Script>
        <link rel="icon" href="/favicon.webp" />
        <title>
          Roof Repair | Roofing | Roof Repair Services In Orange County | Hammer
          On Studios
        </title>
        <meta
          property="og:title"
          content="Roof Repair | Roofing | Roof Repair Services In Orange County | Hammer On Studios"
          key="title"
        />
        <meta
          name="description"
          content="Hammer On Studios Offers Expert Roof Repair Services In Orange County, Ensuring Top-Quality Roofing Solutions To Protect Your Property."
        />
      </Head>
      <Layout>
        <StripSection heading="OUR WORK" />
        <Container className={responsive.container}>
          <Box sx={style.spaces}>
            <Typography sx={style.tophead} className={inter.className}>
              If It’s Broken, We Can Fix It!
            </Typography>
            <Typography sx={style.mainhead} className={inter.className}>
              Explore Our Latest Projects
            </Typography>
            <Typography sx={style.mainhead} className={inter.className}>
              And Recent Works
            </Typography>
            <Box sx={style.newTxtBox}>
              <Typography className={inter.className} sx={style.newText}>
                Our successful projects include roof repair and flat roof repair
                in NYC. We also offer roof Repair Services in Orange County.
              </Typography>
            </Box>
            <Box sx={style.margiins}>
              <Gallery border={true} />
            </Box>
          </Box>
        </Container>
        <Testimonials />
      </Layout>
    </>
  );
}

export default work;
