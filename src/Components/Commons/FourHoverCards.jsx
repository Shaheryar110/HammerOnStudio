import React from "react";
import styles from "../../styles/style.module.css";
import responsive from "../../styles/responsive.module.css";
import { Container, Box, Typography, Stack, Grid } from "@mui/material";
import AnimatedCard from "../Home/AnimatedCard";

function FourHoverCards() {
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
    // artic: {
    //   background: `url(${img01.src})`,
    //   padding: 0,
    //   backgroundPosition: "right",
    //   backgroundSize: "50%",
    //   backgroundColor: "#2871ae",
    //   borderRadius: "10px",
    //   position: "relative",
    //   zIndex: 2,
    //   backgroundRepeat: "no-repeat",
    //   "::before": {
    //     zIndex: 1,
    //     content: "''",
    //     background: `url(${bgIcon.src})`,
    //     width: "300px",
    //     height: "300px",
    //     position: "absolute",
    //     left: "135px",
    //     right: "40px",
    //     bottom: "12px",
    //     top: 0,
    //     backgroundRepeat: "no-repeat",
    //   },
    //   "::after": {
    //     content: "''",
    //     clipPath: "polygon(0% 0%, 75% 0%, 8% 100%, 0% 100%)",
    //     backgroundColor: "#2871ae",
    //     position: "absolute",
    //     width: "116px",
    //     height: "293px",
    //     left: "113px",
    //     right: 0,
    //     margin: "0 auto",
    //     bottom: 0,
    //     zIndex: "-1",
    //   },
    // },
    static: {
      textAlign: "center",
      marginY: "3rem",
    },
    textHead: {
      fontSize: "36px",
      fontWeight: 800,
      lineHeight: "46px",
      color: "#393738",
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
    cardSectionTop: {
      marginY: "6rem",
    },
  };
  return (
    <Container className={responsive.container}>
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
              commercial and home renovation services in New York. We achieve
              this by utilizing our skills to deliver you a professional
              remodeling service that is focused on quality in every way.
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
  );
}

export default FourHoverCards;
