import { Container, Box, Typography, Stack, Grid } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import responsive from "../../styles/responsive.module.css";
import styles from "../../styles/style.module.css";
import white from "../../assets/images/white.webp";
import yellw from "../../assets/images/yellw.webp";
import dril from "../../assets/images/dril.webp";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import CabinOutlinedIcon from "@mui/icons-material/CabinOutlined";
import { motion, easeIn } from "framer-motion";
import IconCard from "../Commons/iconCard";

function RepariAndRenovation() {
  const style = {
    main: {
      paddingY: "5rem",
    },
    submain: {
      marginY: "4rem",
    },
    center: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    weight: {
      fontWeight: "700",
      fontSize: "1.79rem",
    },
    para: {
      fontSize: "18px",
      fontWeight: 400,
      lineHeight: "28px",
      lineHeight: 1.7,

      margin: "30px 0",
      color: "#7A7A7A",
    },
    figure: {
      position: "relative",
      " :: before": {
        content: "''",
        width: "10px",
        height: "37rem",
        backgroundColor: "#3772B0",
        position: "absolute",
        right: 0,
      },
      "::after": {
        content: "''",
        width: "35rem",
        height: "0.2rem",
        backgroundColor: "#3772B0",
        position: "absolute",
        bottom: "-24px",
        right: "0px",
      },
    },
    media: {
      padding: "1rem",
      display: "flex",
      alignItems: "flex-start",
    },
    iconBox: {
      width: "70px",
      height: "70px",
      backgroundColor: "#fff1f2",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "100%",
      ":hover": {
        backgroundColor: "#2871ae",
        color: "white",
        transition: "all ease 1",
      },
    },
    mediaBody: {
      marginLeft: "25px",
      flex: 1,
    },
    heading: {
      color: "black",
      fontSize: "1.5rem",
      marginBottom: "0.5rem",
      fontWeight: 500,
      lineHeight: 1.2,
    },
    text: {
      marginTop: "15px",
      fontSize: "17px",
      fontWeight: 400,
      lineHeight: "28px",
      lineHeight: 1.7,
      margin: "30px 0",
      color: "#7A7A7A",
    },
    hover: {
      width: "70px",
      height: "70px",
      backgroundColor: "#fff1f2",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "100%",
      backgroundColor: "#2871ae",
      color: "white",
      transition: "all ease 1",
    },
  };
  const data = [
    {
      icon: <PersonOutlineOutlinedIcon />,
      heading: "Professionalism",
      para: ` With over 25 years of experience in the construction industry,
      Hammer-On Studios is the leading commercial and residential repair and
      renovation in New York descent, with uncompromised quality and
      attention to the smallest detail. Moreover, our green basement
      remodeling tactics eradicate the negative environmental impact, which
      provides you with a cost-effective and healthy outcome.`,
    },
    {
      icon: <DoneOutlinedIcon />,
      heading: "Reliability",
      para: `As an experienced residential and building remodeling
      business, we strive to develop strong professional
      relationships with all our clients and employees to
      deliver everlasting innovative results. Therefore, we take
      significant measures to ensure our reliability through our
      genuine efforts.`,
    },
    {
      icon: <CabinOutlinedIcon />,
      heading: "Quality",
      para: `Our legacy as the top-tier office renovation contractor in
      New York has the magnitude of excellence because Hammer-On
      Studios aims to meet any renovation aspirations that our
      client wishes to achieve with premium services on time and
      to a high standard. We transform your repair needs into
      customized solutions.`,
    },
  ];

  return (
    <>
      <Stack sx={style.main}>
        <Container className={responsive.container}>
          <Box sx={style.contentBox}>
            <Grid container sx={style.center}>
              <Grid item lg={5}>
                <Box>
                  <Typography variant="h3" sx={style.weight}>
                    We are your Commercial and Residential Repair and Renovation
                    Expert!
                  </Typography>
                  <Typography sx={style.para}>
                    Hammer-on Studios is an experienced general contractor
                    specializing in offering commercial and residential
                    remodeling and renovation services. All our remodeling
                    process is creative, collaborative, and tailored to match
                    your core business goals.
                  </Typography>
                  <Typography sx={style.para}>
                    At Hammer-On Studios, we have solidified ourselves as the
                    leading office & home renovation contractor based in New
                    York. Thus, our experienced team of professionals has
                    delivered top-quality, experienced renovation services to
                    business owners, homeowners, and property owners throughout
                    New York. No matter how big or small your project is, we
                    take pride in completing your space redesign needs with
                    excellence.
                  </Typography>
                </Box>
              </Grid>
              <Grid item lg={5}>
                <motion.div
                  initial={{ y: 200, opacity: 0 }} // Initial position outside the left side of the screen with opacity 0
                  animate={{ y: 0, opacity: 1 }} // Final position (its actual position) with opacity 1
                  transition={{ duration: 2, type: "easeIn", delay: 1 }} // Animation duration, easing, and delay
                >
                  <Box sx={style.figure}>
                    <Image
                      src={white}
                      alt="white"
                      className={styles.img1}
                      style={{ height: "350px", width: "60%" }}
                    />
                    <Image src={yellw} alt="white" className={styles.img2} />
                    <Image src={dril} alt="white" className={styles.img3} />
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </Box>
        </Container>
        <Stack sx={style.submain}>
          <Container className={responsive.container}>
            <Grid container>
              {data.map((data) => {
                return (
                  <Grid item lg={4}>
                    <IconCard
                      icon={data.icon}
                      heading={data.heading}
                      para={data.para}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Container>
        </Stack>
      </Stack>
    </>
  );
}

export default RepariAndRenovation;
