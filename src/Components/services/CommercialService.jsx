import { Container, Box, Typography, Button, Grid } from "@mui/material";
import React from "react";
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
import Image from "next/image";
import styles from "../../styles/style.module.css";
function CommercialService() {
  const data = [
    {
      smallHeading: "SHORT INTRO ABOUT",
      mainHeading: "Office renovation and expansion",
      para1:
        "If you’re not happy with your current business space or planning to expand your facility, it’s time to contact Hammer-On Studios. We specialize in offering end-to-end office renovation and expansion solutions optimized to solve your core problems. Thus, making us the optimal choice for your workplace renovation as the most effective office renovation contractor throughout New York.",
      para2:
        "Our experienced and knowledgeable team of contractors can alter, renovate, and expand any business space to meet our client’s operational needs. Even if you operate in an awkwardly-shaped office, we can turn it functional and visually appealing with our state-of-the-art services. We use top-tier products and futuristic equipment to finish all our clients’ renovation projects on time.",
      src: fourMen,
    },
    {
      smallHeading: "SHORT INTRO ABOUT",
      mainHeading: "Workspace Addition in Commercial Buildings",
      para1:
        "If you’re not happy with your current business space or planning to expand your facility, it’s time to contact Hammer-On Studios. We specialize in offering end-to-end office renovation and expansion solutions optimized to solve your core problems. Thus, making us the optimal choice for your workplace renovation as the most effective office renovation contractor throughout New York.",
      para2:
        "Our experienced and knowledgeable team of contractors can alter, renovate, and expand any business space to meet our client’s operational needs. Even if you operate in an awkwardly-shaped office, we can turn it functional and visually appealing with our state-of-the-art services. We use top-tier products and futuristic equipment to finish all our clients’ renovation projects on time.",
      src: fourMen1,
      order: true,
    },
    {
      smallHeading: "SHORT INTRO ABOUT",
      mainHeading: "Commercial Remodeling",
      para1:
        "If you’re not happy with your current business space or planning to expand your facility, it’s time to contact Hammer-On Studios. We specialize in offering end-to-end office renovation and expansion solutions optimized to solve your core problems. Thus, making us the optimal choice for your workplace renovation as the most effective office renovation contractor throughout New York.",
      para2:
        "Our experienced and knowledgeable team of contractors can alter, renovate, and expand any business space to meet our client’s operational needs. Even if you operate in an awkwardly-shaped office, we can turn it functional and visually appealing with our state-of-the-art services. We use top-tier products and futuristic equipment to finish all our clients’ renovation projects on time.",
      src: fourMen2,
    },
    {
      smallHeading: "SHORT INTRO ABOUT",
      mainHeading: "Warehouse Remodel",
      para1:
        "If you’re not happy with your current business space or planning to expand your facility, it’s time to contact Hammer-On Studios. We specialize in offering end-to-end office renovation and expansion solutions optimized to solve your core problems. Thus, making us the optimal choice for your workplace renovation as the most effective office renovation contractor throughout New York.",
      para2:
        "Our experienced and knowledgeable team of contractors can alter, renovate, and expand any business space to meet our client’s operational needs. Even if you operate in an awkwardly-shaped office, we can turn it functional and visually appealing with our state-of-the-art services. We use top-tier products and futuristic equipment to finish all our clients’ renovation projects on time.",
      src: fourMen3,
      order: true,
    },
    {
      smallHeading: "SHORT INTRO ABOUT",
      mainHeading: "Office Interior and Exterior",
      para1:
        "If you’re not happy with your current business space or planning to expand your facility, it’s time to contact Hammer-On Studios. We specialize in offering end-to-end office renovation and expansion solutions optimized to solve your core problems. Thus, making us the optimal choice for your workplace renovation as the most effective office renovation contractor throughout New York.",
      para2:
        "Our experienced and knowledgeable team of contractors can alter, renovate, and expand any business space to meet our client’s operational needs. Even if you operate in an awkwardly-shaped office, we can turn it functional and visually appealing with our state-of-the-art services. We use top-tier products and futuristic equipment to finish all our clients’ renovation projects on time.",
      src: fourMen4,
    },
    {
      smallHeading: "SHORT INTRO ABOUT",
      mainHeading: "Conference Rooms Renovations and Expansion",
      para1:
        "If you’re not happy with your current business space or planning to expand your facility, it’s time to contact Hammer-On Studios. We specialize in offering end-to-end office renovation and expansion solutions optimized to solve your core problems. Thus, making us the optimal choice for your workplace renovation as the most effective office renovation contractor throughout New York.",
      para2:
        "Our experienced and knowledgeable team of contractors can alter, renovate, and expand any business space to meet our client’s operational needs. Even if you operate in an awkwardly-shaped office, we can turn it functional and visually appealing with our state-of-the-art services. We use top-tier products and futuristic equipment to finish all our clients’ renovation projects on time.",
      src: fourMen5,
      order: true,
    },
  ];
  const style = {
    margins: {
      marginY: "2rem",
    },
    boxSetting: {
      marginY: "4rem",
      //   display: "flex",
      //   flexDirection: "column",
      //   alignItems: "center",
      //   justifyContent: "flex-end",
    },
    buton: {
      marginY: "1rem",
      color: "white",
      paddingY: "0.5rem",
      fontSize: "1rem",
      backgroundColor: "white",
      color: "black",
      marginTop: "2rem",
    },
    three: {
      display: "flex",
      flexDirection: "row",
      gap: "1rem",

      alignItems: "center",
    },
    h4: {
      color: "black",
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
  };
  return (
    <>
      <Box>
        <Stripe heading="COMMERCIAL SERVICE" />
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
        <Grid container>
          <Grid item lg={2}></Grid>
          <Grid item lg={3}>
            <Image src={new1} />
          </Grid>
          <Grid item lg={4}>
            <Box sx={style.boxSetting}>
              <Typography variant="h4" sx={style.h4}>
                CONTACT FORM
              </Typography>
              <Typography variant="h3" sx={style.h3}>
                Need Any Home Repair Help?
              </Typography>
              <Box sx={style.three}>
                <input className={styles.feild} placeholder="Name" />
                <input className={styles.feild1} placeholder="Name" />
              </Box>
              <Button variant="contained" sx={style.buton}>
                SUBMIT NOW
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
