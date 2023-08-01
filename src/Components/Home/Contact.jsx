import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import responsive from "../../styles/responsive.module.css";
import styles from "../../styles/style.module.css";
import img021 from "../../assets/images/img012.jpg";

function Contact() {
  const style = {
    mainCont: {
      marginY: "5rem",
    },
    tag: {
      color: "black",
      fontSize: "14px",
      fontWeight: 700,
      marginBottom: "10px",
      letterSpacing: "1px",

      position: "relative",
      lineHeight: "21px",
      paddingLeft: "30px",
      "::before": {
        content: "' '",
        height: "3px",
        width: "21px",
        backgroundColor: "#2871ae",
        position: "absolute",
        top: "9px",
        left: 0,
      },
    },
    h3: {
      fontSize: "40px",
      fontWeight: 800,
      fontStyle: "normal",
      color: "black",
      lineHeight: "46px",
      marginBottom: "1rem",
    },
    par: {
      fontSize: "20px",
      fontWeight: 500,
      color: "grey",
    },
    contactForm: {
      padding: "4rem",
      width: "100%",
      height: "100%",
      borderRadius: "1rem",
      position: "relative",
      backgroundImage: `url(${img021.src})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      marginY: "4rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "start",
    },
    tag1: {
      color: "white",
      fontSize: "16px",
      fontWeight: 700,
      marginBottom: "10px",
      letterSpacing: "1px",

      position: "relative",
      lineHeight: "21px",
      paddingLeft: "30px",
      "::before": {
        content: "' '",
        height: "3px",
        width: "21px",
        backgroundColor: "#2871ae",
        position: "absolute",
        top: "9px",
        left: 0,
      },
    },
    h31: {
      fontSize: "39px",
      fontWeight: 800,
      fontStyle: "normal",
      color: "white",
      lineHeight: "46px",
      marginBottom: "0.5rem",
    },
    form: {
      marginY: "1rem",
      backgroundColor: "#408ECD",
      border: "2px solid white",
      color: "white",
      paddingX: "2rem",
    },
    buton: {
      width: "100%",
      marginY: "1rem",
      color: "white",
      borderRadius: "1rem",
      fontSize: "1.3rem",
    },
    bux: {
      height: "100%",
      display: "flex",
      justifyContent: "center",

      flexDirection: "column",
    },
  };
  return (
    <>
      <Box sx={style.mainCont}>
        <Container className={responsive.container}>
          <Grid container>
            <Grid item lg={6}>
              <Box sx={style.bux}>
                <Typography variant="h4" sx={style.tag}>
                  REVIEWS
                </Typography>
                <Typography variant="h3" sx={style.h3}>
                  Our professional services are just one call away!
                </Typography>
                <Typography sx={style.par}>
                  Want to know more about our home and building renovation
                  services? Connect with us today by writing us a message or
                  calling us today. Our representatives will reach out within 24
                  hours.
                </Typography>
                <ul className={styles.unOrderList}>
                  <li id={styles.changeColor}>info@hammeronstudios.com</li>
                  <li>(845) 837-2616</li>
                </ul>
              </Box>
            </Grid>
            <Grid item lg={6}>
              <Box sx={style.contactForm}>
                <Typography variant="h4" sx={style.tag1}>
                  CONTACT HAMMER-ON STUDIOS
                </Typography>
                <Typography variant="h3" sx={style.h31}>
                  Send Us a Message
                </Typography>
                <input className={styles.feild} placeholder="Name" />
                <input className={styles.feild} placeholder="Email" />
                <input className={styles.feild} placeholder="Phone" />
                <input className={styles.feild} placeholder="Address" />
                <Button variant="contained" sx={style.buton}>
                  SUBMIT NOW
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Contact;
