import React from "react";
import responsive from "../../styles/responsive.module.css";
import { Container, Box, Typography, Stack, Grid } from "@mui/material";
import AnimatedCard from "../Home/AnimatedCard";
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

function FourHoverCards({ background }) {
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
      fontSize: "1rem",
    },
    cardHeading: {
      fontSize: "38px",
      fontWeight: 800,
      lineHeight: "46px",
      color: "#393738",
    },
    cardSectionTop: {
      marginY: "6rem",
    },
    main: {
      width: "100%",
      height: "100%",
      backgroundColor: background || "white",
    },
  };
  return (
    <Box sx={style.main}>
      <Container className={responsive.container}>
        <Box sx={style.cardSectionTop}>
          <Grid
            container
            columnSpacing={3}
            sx={{ justifyContent: "space-between", marginY: "2rem" }}
          >
            <Grid item lg={6}>
              <Typography
                variant="h3"
                sx={style.cardHeading}
                className={inter.className}
              >
                Leading Way In Roofing & Home Repair Construction!
              </Typography>
            </Grid>
            <Grid item lg={6}>
              <Typography sx={style.slogan} className={inter.className}>
                Whether you want home repair services in Rockland County or
                leakage repair experts in Putnam County, we are just a call
                away.
                {/* At Hammer-On Studios, we specialize in delivering high-end
                commercial and home renovation services in New York. We achieve
                this by utilizing our skills to deliver you a professional
                remodeling service that is focused on quality in every way. */}
              </Typography>
              <ul className={inter.className} style={{ paddingLeft: "2rem" }}>
                <li
                  style={{
                    color: "#393738",
                    fontSize: "1rem",
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
    </Box>
  );
}

export default FourHoverCards;
