import { Container, Box, Typography, Stack, Grid } from "@mui/material";
import React from "react";
import responsive from "../../styles/responsive.module.css";
import styles from "../../styles/style.module.css";
import img01 from "../../assets/images/img01.jpg";
import bgIcon from "../../assets/images/bgicon.png";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import AnimatedCard from "./AnimatedCard";

function ReadyToGetCard() {
  const style = {
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
        width: "300px",
        height: "300px",
        position: "absolute",
        left: "135px",
        right: "40px",
        bottom: "12px",
        top: 0,
        backgroundRepeat: "no-repeat",
      },
      "::after": {
        content: "''",
        clipPath: "polygon(0% 0%, 75% 0%, 8% 100%, 0% 100%)",
        backgroundColor: "#2871ae",
        position: "absolute",
        width: "116px",
        height: "293px",
        left: "113px",
        right: 0,
        margin: "0 auto",
        bottom: 0,
        zIndex: "-1",
      },
    },
    static: {
      textAlign: "center",
      marginY: "3rem",
    },
    textHead: {
      fontSize: "36px",
      fontWeight: 800,
      lineHeight: "46px",
      color: "black",
    },
    slogan: {
      color: "#646464",
      fontSize: "1.3rem",
    },
    cardHeading: {
      fontSize: "36px",
      fontWeight: 800,
      lineHeight: "46px",
      color: "#393738",
    },
  };
  return (
    <>
      <Stack sx={style.readyCard}>
        <Container sx={responsive.container}>
          <Grid container sx={style.card}>
            <Grid item lg={9}>
              <Box sx={style.artic}>
                <Box className={styles.mediass}>
                  <span className={styles.span1}>
                    <QuestionAnswerIcon />
                  </span>
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
            <Typography variant="h3" sx={style.textHead}>
              If It’s Broken, We Can Fix It!
            </Typography>
            <Typography sx={style.slogan}>
              Check out the glimpses of our completed residential and commercial
              renovation and remodeling projects!
            </Typography>
          </Box>
          <Box sx={style.cardSectionTop}>
            <Grid container columnSpacing={3}>
              <Grid item lg={6}>
                <Typography variant="h3" sx={style.cardHeading}>
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
                <ul>
                  <li
                    style={{
                      color: "#393738",
                      fontSize: "1.3rem",
                      marginTop: "1rem",
                      fontFamily: "inherit",
                    }}
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
