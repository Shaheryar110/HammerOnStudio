import { Container, Box, Typography, Stack, Grid } from "@mui/material";
import React from "react";
import styles from "../../styles/style.module.css";
import BeforeHeadSmall from "../Commons/BeforeHeadSmall";
import HeadingH2 from "../Commons/HeadingH2";
import labours from "../../assets/images/labours.webp";
import Image from "next/image";
import tag01 from "../../assets/images/tag01.webp";
import FourHoverCards from "../Commons/FourHoverCards";
import Head from "next/head";

function AboutContent() {
  const style = {
    container: {
      maxWidth: { xl: "1250px", md: "1100px" },
    },
    sapcing: {
      marginY: "5rem",
      justifyContent: "space-between",
    },
    para: {
      marginY: "20px",
      color: "#817173",
      fontSize: "1rem",
      textAlign: "center",
    },
    para1: {
      marginY: "20px",
      color: "#817173",
      fontSize: "1rem",
    },
    rightSide: {},
    image: {
      backgroundImage: `url(${tag01.src})`,
      backgroundPosition: "top right",
      backgroundRepeat: "repeat",
      opacity: 1,
      transition: "background 0.3s, border-radius 0.3s, opacity 0.3s",
    },
  };
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.webp" />
        <title>About</title>
      </Head>
      <Box sx={style.image}>
        <Container sx={style.container}>
          <Grid container sx={style.sapcing}>
            <Grid item lg={5}>
              <BeforeHeadSmall text="About Us" />
              <HeadingH2 text="About Hammer-On Studios" />
              <Typography sx={style.para1}>
                With more than two decades of experience, Hammer-On Studios is a
                commercial and residential firm that specializes in building
                roofs, floors, siding, retaining walls, painting, kitchen and
                bathroom renovations, basement remodeling, decks, crown
                moulding, and much more.
              </Typography>
              <Typography sx={style.para1}>
                Our team of professionals is dedicated to making your facility
                remodeling a great experience. Since our inception, we have
                endeavoured to develop long-term relationships with our
                customers. We will exceed our client’s expectations and gain
                their trust through superior performance by every team member.
              </Typography>
            </Grid>
            <Grid item lg={6}>
              <Box>
                <Image
                  src={labours}
                  fill={false}
                  style={{ width: "100%", height: "100%" }}
                  className={styles.imgs}
                />
              </Box>
            </Grid>
          </Grid>
          <Box>
            <HeadingH2 text="Our Mission" align="center" />
            <Typography sx={style.para}>
              At Hammer-On Studios, our mission is to exceed our client's
              expectations through design, renovation, and communication,
              delivering turn-key, cost-effective, and high-quality results on
              schedule. We collaborate with our clients to turn their dream
              visions to life. Our expert renovators will incorporate your
              preferences while adding value to your property’s look so that you
              get exactly what you desire. Your satisfaction is crucial to us,
              and it will be highlighted in our work.
            </Typography>
          </Box>
          <Box>
            <HeadingH2 text="Our Vision" align="center" />
            <Typography sx={style.para}>
              Our vision is to become the leading renovation company while
              continually delivering innovative solutions, evolving our team,
              and exceeding customer expectations. We know how important your
              home or business location is to you, and we help you to turn it
              into a space you can feel relaxed. We staff our team with
              knowledgeable and experienced workers who will take great care of
              your location and deliver top-of-the-line results. We pride
              ourselves on our reliability and integrity, and we aim to be the
              renovation business you can trust
            </Typography>
          </Box>
          <FourHoverCards />
        </Container>
      </Box>
    </>
  );
}

export default AboutContent;
