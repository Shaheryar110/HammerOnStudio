import { Container, Box, Typography, Stack, Grid } from "@mui/material";
import React from "react";
import responsive from "../../styles/responsive.module.css";
import styles from "../../styles/style.module.css";
import img01 from "../../assets/images/img01.webp";
import bgIcon from "../../assets/images/bgicon.png";
import { Inter } from "next/font/google";
import AnimatedCard from "./AnimatedCard";
import Image from "next/image";
import chat from "../../../public/chat.webp";
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

function ReadyToGetCard() {
  const style = {
    container: {
      maxWidth: { xl: "1200px", lg: "1200px" },
    },
    readyCard: {
      paddingY: "6rem",
    },
    card: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
    artic: {
      display: { lg: "block", xs: "none" },
      background: `url(${img01.src})`,
      padding: 0,
      backgroundPosition: "right",
      backgroundSize: "50%",
      backgroundColor: "#2871ae",
      borderRadius: "10px",
      position: "relative",
      zIndex: 2,
      backgroundRepeat: "no-repeat",
      "::before": {
        zIndex: 1,
        content: "''",
        background: `url(${bgIcon.src})`,
        width: "320px",
        height: "320px",
        position: "absolute",
        left: "135px",
        right: "40px",
        bottom: "12px",
        top: "30px",
        backgroundRepeat: "no-repeat",
      },
      "::after": {
        content: "''",
        clipPath: "polygon(0% 0%, 75% 0%, 8% 100%, 0% 100%)",
        backgroundColor: "#2871ae",
        position: "absolute",
        width: "116px",
        height: "325.5px",
        left: "98px",
        right: 0,
        margin: "0 auto",
        bottom: 0,
        zIndex: "-1",
      },
    },
    static: {
      textAlign: "center",
      marginTop: "6rem",
      marginBottom: "7rem",
    },
    textHead: {
      fontSize: "38px",
      fontWeight: 800,
      lineHeight: "46px",
      color: "#393738",
      marginBottom: "12px",
    },
    slogan: {
      color: "#646464",
      fontSize: "16px",
    },
    cardHeading: {
      fontSize: "36px",
      fontWeight: 900,
      lineHeight: "46px",
      color: "#393738",
    },
    mediass: {
      padding: "85px 0",
      alignItems: "center",
      justifyContent: { lg: "flex-start", xs: "center" },
      marginLeft: { lg: "39px" },
      display: "flex",
      width: "100%",
    },
    mediass1: {
      alignItems: "center",
      justifyContent: { lg: "flex-start", xs: "center" },
      marginLeft: { lg: "39px" },
      display: "flex",
      width: "100%",
    },
    span1: {
      width: "50px",
      height: "50px",
      backgroundColor: "#fff",
      borderRadius: "100px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginRight: "20px",
    },
    smallCard: {
      display: { lg: "none", xs: "flex" },
      width: "100%",
      backgroundColor: "#2871ae",
      borderRadius: "10px",
    },
    cardText: {
      color: "#ffffff",

      fontWeight: { lg: 700, xs: 800 },
      margin: "0px 0px 6px 0px",
      lineHeight: "45px",
      fontSize: { lg: "30px", xs: "1.5rem" },
    },
  };
  return (
    <>
      <Stack sx={style.readyCard}>
        <Container sx={style.container}>
          <Grid container sx={style.card}>
            <Grid item lg={12}>
              <Box sx={style.artic}>
                <Box sx={style.mediass}>
                  <Box sx={style.span1}>
                    <Image src={chat} fill={false} />
                  </Box>
                  <div className={styles.mediaBod}>
                    <Typography variant="h4" sx={style.cardText}>
                      Ready to get your facility renovation work done from
                      Hammer-On Studios?
                    </Typography>
                    <Typography className={styles.cardContact}>
                      Connect with us at (845) 837-2616 now!
                    </Typography>
                  </div>
                </Box>
              </Box>
              <Box sx={style.smallCard}>
                <Box sx={style.mediass1}>
                  <Box sx={style.span1}>
                    <Image src={chat} fill={false} />
                  </Box>
                  <div className={styles.mediaBod}>
                    <Typography variant="h4" className={styles.cardText}>
                      Ready to get your facility renovation work done from
                      Hammer-On Studios?
                    </Typography>
                    <Typography className={styles.cardContact}>
                      Connect with us at (845) 837-2616 now!
                    </Typography>
                  </div>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Box sx={style.static}>
            <Typography
              variant="h3"
              sx={style.textHead}
              className={inter.className}
            >
              If It’s Broken, We Can Fix It!
            </Typography>
            <Typography sx={style.slogan}>
              Check out the glimpses of our completed residential and commercial
              renovation and remodeling projects!
            </Typography>
          </Box>
          <Box sx={style.cardSectionTop}>
            <Grid
              container
              columnSpacing={3}
              sx={{ justifyContent: "space-between" }}
            >
              <Grid item lg={6}>
                <Typography
                  variant="h4"
                  sx={style.cardHeading}
                  className={inter.className}
                >
                  Leading Way In Roofing & Home Repair Construction!
                </Typography>
              </Grid>
              <Grid item lg={6}>
                <Typography sx={style.slogan}>
                  At Hammer-On Studios, we specialize in delivering high-end
                  commercial and home renovation services in New York. We
                  achieve this by utilizing our skills to deliver you a
                  professional remodeling service that is focused on quality in
                  every way.
                </Typography>
                <ul style={{ paddingLeft: "2rem", marginTop: "1.5rem" }}>
                  <li
                    style={{
                      color: "#393738",
                      fontSize: "1rem",
                      marginTop: "1rem",
                    }}
                    className={inter.className}
                  >
                    3000+ successfully completed projects
                  </li>
                </ul>
              </Grid>
            </Grid>
            <AnimatedCard />
          </Box>
        </Container>
      </Stack>
    </>
  );
}

export default ReadyToGetCard;
