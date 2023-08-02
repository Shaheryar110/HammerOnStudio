import StripSection from "@/Components/Commons/Stripe";
import Layout from "@/Components/Layout";
import React from "react";
import { Container, Box, Typography, Button, Grid } from "@mui/material";
import responsive from "../styles/responsive.module.css";
import Gallery from "@/Components/Home/Gallery";

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
      color: "black",
      fontSize: "40px",
      fontWeight: 800,
      textAlign: "center",
    },
    spaces: {
      marginY: "5rem",
    },
  };
  return (
    <Layout>
      <StripSection heading="OUR WORK" />
      <Container className={responsive.container}>
        <Box sx={style.spaces}>
          <Typography sx={style.tophead}>
            If It’s Broken, We Can Fix It!
          </Typography>
          <Typography sx={style.mainhead}>
            Explore Our Latest Projects And Recent Works
          </Typography>
          <Box sx={style.margiins}>
            <Gallery border={true} />
          </Box>
        </Box>
      </Container>
    </Layout>
  );
}

export default work;
