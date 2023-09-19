import StripSection from "@/Components/Commons/Stripe";
import Layout from "@/Components/Layout";
import React from "react";
import { Container, Box, Typography, Button, Grid } from "@mui/material";
import responsive from "../styles/responsive.module.css";
import Gallery from "@/Components/Home/Gallery";
import Testimonials from "@/Components/Home/Testimonials";
import { Inter } from "next/font/google";
import Head from "next/head";
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
  };
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.webp" />
        <title>Our Work</title>
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
