import { Container, Box, Typography, Stack, Grid } from "@mui/material";
import React from "react";
import responsive from "../../styles/responsive.module.css";
import styles from "../../styles/style.module.css";

function StripSection() {
  const style = {
    bg: {
      backgroundColor: "#2F2F2F",
    },
    heading: {
      color: "white",
      fontWeight: 800,
    },
    box: {
      textAlign: "center",
      width: "100%",
      paddingY: "4rem",
      paddingRight: "1rem",
    },
  };
  return (
    <>
      <Box sx={style.bg}>
        <Container className={responsive.container}>
          <Box sx={style.box}>
            <Typography variant="h3" sx={style.heading}>
              About Us
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default StripSection;
