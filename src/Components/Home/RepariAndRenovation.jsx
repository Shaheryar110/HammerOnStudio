import { Container, Box, Typography, Stack, Grid } from "@mui/material";
import Image from "next/image";
import React, { useRef } from "react";
import responsive from "../../styles/responsive.module.css";
import styles from "../../styles/style.module.css";
import white from "../../assets/images/white.webp";
import yellw from "../../assets/images/yellw.webp";
import dril from "../../assets/images/dril.webp";
import { motion, useInView } from "framer-motion";
import IconCard from "../Commons/IconCard";
import { Inter } from "next/font/google";
import joist from "../../../public/joist.webp";
import joistWhite from "../../../public/joistWhite1.webp";
import check from "../../../public/check.webp";
import checkWhite from "../../../public/checkWhite.webp";
import user from "../../../public/user.webp";
import userWhite from "../../../public/userWhite.webp";
import banner from "../../assets/images/banner.webp";
import { fadeLeft } from "../../utils/Reveal";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

function RepariAndRenovation() {
  const style = {
    container: {
      maxWidth: { xl: "1300px", lg: "1200px" },
    },
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
      fontWeight: "800",
      fontSize: "31px",
      lineHeight: "31px",
      margin: "0px 0px 30px",
      color: "#393738",
      letterSpacing: 0.5,
    },
    para: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "28px",
      lineHeight: 1.7,

      margin: "0px 0px 30px",
      color: "#7A7A7A",
    },
    figure: {
      position: "relative",
      " :: before": {
        content: "''",
        width: "10px",
        height: "35.6rem",
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
      color: "#393738",
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
    contentBox: {
      width: "100%",
      height: "100%",
      position: "relative",
      "::before": {
        content: "''",
        backgroundImage: `url(${banner.src})`,
        backgroundPosition: "top right",
        position: "absolute",
        zIndex: "-1",
        backgroundSize: "cover",
      },
    },
  };
  const data = [
    {
      icon: user,
      hover: userWhite,
      heading: "Professionalism",
      para: ` With over 25 years of experience in the construction industry,
      Hammer-On Studios is the leading commercial and residential repair and
      renovation in New York descent, with uncompromised quality and
      attention to the smallest detail. Moreover, our green basement
      remodeling tactics eradicate the negative environmental impact, which
      provides you with a cost-effective and healthy outcome.`,
    },
    {
      icon: joist,
      hover: joistWhite,
      heading: "Reliability",
      para: `As an experienced residential and building remodeling
      business, we strive to develop strong professional
      relationships with all our clients and employees to
      deliver everlasting innovative results. Therefore, we take
      significant measures to ensure our reliability through our
      genuine efforts.`,
    },
    {
      icon: check,
      hover: checkWhite,
      heading: "Quality",
      para: `Our legacy as the top-tier office renovation contractor in
      New York has the magnitude of excellence because Hammer-On
      Studios aims to meet any renovation aspirations that our
      client wishes to achieve with premium services on time and
      to a high standard. We transform your repair needs into
      customized solutions.`,
    },
  ];
  const ref = useRef(null);
  const isInView = useInView(ref);
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1);

  return (
    <>
      <Stack sx={style.main}>
        <Container className={responsive.container}>
          <Box sx={style.contentBox} ref={ref}>
            <Grid container sx={style.center}>
              <Grid item lg={5}>
                <motion.div
                  variants={{
                    hidden: {
                      x: isInView ? -200 : 0,
                      opacity: isInView ? 0 : 1,
                    },
                    visible: {
                      x: isInView ? 0 : -200,
                      opacity: isInView ? 1 : 0,
                    },
                  }}
                  initial={"hidden"}
                  animate={"visible"}
                  transition={{ duration: 1, type: "easeIn" }}
                >
                  <Box>
                    <Typography sx={style.weight} className={inter.className}>
                      We are your Commercial and Residential Repair and
                      Renovation Expert!
                    </Typography>
                    <Typography sx={style.para}>
                      From Green basement remodeling to home repair, we do it
                      all!
                    </Typography>

                    <Typography sx={style.para}>
                      At Hammer-On Studios, we have solidified ourselves as the
                      leading office & home renovation contractor based in New
                      York. Thus, our experienced team of professionals has
                      delivered top-quality, experienced renovation services to
                      business owners, homeowners, and property owners
                      throughout New York. No matter how big or small your
                      project is, we take pride in completing your space
                      redesign needs with excellence.
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
              <Grid item lg={5}>
                <motion.div
                  variants={{
                    hidden: {
                      x: isInView ? 200 : 0,
                      opacity: isInView ? 0 : 1,
                    },
                    visible: {
                      x: isInView ? 0 : 200,
                      opacity: isInView ? 1 : 0,
                    },
                  }}
                  initial={"hidden"}
                  animate={"visible"}
                  transition={{ duration: 1, type: "easeIn" }}
                >
                  <Box sx={style.figure}>
                    <Image
                      src={white}
                      alt="custom commercial office remodeling in NYC"
                      className={styles.img1}
                      fill={false}
                      style={{ height: "330px", width: "60%" }}
                    />
                    <Image
                      src={yellw}
                      alt="commercial bathroom remodeling contractors in New York"
                      className={styles.img2}
                      fill={false}
                    />
                    <Image
                      src={dril}
                      alt="roof repair"
                      className={styles.img3}
                      fill={false}
                    />
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </Box>
        </Container>
        <Stack sx={style.submain} ref={ref1}>
          <Container sx={style.container}>
            <Grid container>
              {data.map((data, index) => {
                return (
                  <Grid item lg={4} key={index}>
                    <motion.div
                      variants={{
                        hidden: {
                          x: isInView1 ? 200 : 0,
                          opacity: isInView1 ? 0 : 1,
                        },
                        visible: {
                          x: isInView1 ? 0 : 200,
                          opacity: isInView1 ? 1 : 0,
                        },
                      }}
                      initial={"hidden"}
                      animate={"visible"}
                      transition={{
                        duration: 1,
                        type: "easeIn",
                        delay: isInView1 ? index * 0.5 : 0,
                      }}
                    >
                      <IconCard
                        icon={data.icon}
                        heading={data.heading}
                        para={data.para}
                        hoverIcon={data.hover}
                      />
                    </motion.div>
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
