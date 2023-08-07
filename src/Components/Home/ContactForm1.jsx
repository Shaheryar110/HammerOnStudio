import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import responsive from "../../styles/responsive.module.css";
import styles from "../../styles/style.module.css";
import new1 from "../../assets/images/new1.webp";
import Image from "next/image";
import BeforeHeadSmall from "../Commons/BeforeHeadSmall";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
function ContactForm1() {
  const style = {
    main: {
      backgroundColor: "#3FBDF9",
      marginTop: "3rem",
      position: "relative",
    },

    boxSetting: {
      marginY: "4rem",
    },
    buton: {
      marginY: "1rem",
      color: "white",
      paddingY: "0.5rem",
      fontSize: "1rem",
      backgroundColor: "white",
      color: "black",
      marginTop: "2rem",
      fontWeight: 600,
      shadow: "none",
      border: "1px solid white",
      paddingX: "1rem",
      borderRadius: "0.5rem",
      ":hover": {
        marginY: "1rem",
        color: "white",
        paddingY: "0.5rem",
        fontSize: "1rem",
        backgroundColor: "white",
        color: "black",
        marginTop: "2rem",
        fontWeight: 600,
        shadow: "none",
        border: "1px solid white",
        paddingX: "1rem",
        borderRadius: "0.5rem",
      },
    },
    three: {
      display: "flex",
      flexDirection: "row",
      gap: "1rem",

      alignItems: "center",
    },
    helpering: {
      position: "absolute",
      bottom: "-5px",
      left: "380px",
    },
  };

  return (
    <>
      <Box sx={style.main}>
        <Container className={responsive.container}>
          <Grid container columnSpacing={3}>
            <Box sx={style.helpering}>
              <Image src={new1} style={{ height: "400px" }} />
            </Box>
            <Grid item lg={5}></Grid>
            <Grid item lg={7}>
              <Box sx={style.boxSetting}>
                <BeforeHeadSmall text="CONTACT FORM" color="white" />
                <Typography variant="h3" className={styles.h3}>
                  Need Any Home Repair Help?
                </Typography>
                <Box sx={style.three}>
                  <input className={styles.feild} placeholder="Name" />
                  <input className={styles.feild1} placeholder="Email" />
                  <Button sx={style.buton} className={poppins.className}>
                    SUBMIT NOW
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default ContactForm1;
