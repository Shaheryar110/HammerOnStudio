import React from "react";
import { Container, Box, Typography, Button, Grid } from "@mui/material";
import responsive from "../../styles/responsive.module.css";
import BeforeHeadSmall from "../Commons/BeforeHeadSmall";
import HeadingH2 from "../Commons/HeadingH2";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";
import styles from "../../styles/style.module.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

function Form() {
  const style = {
    spacing: {
      marginY: "5rem",
    },
    paragraph: {
      color: "grey",
      fontSize: "1.1rem",
      marginY: "1.5rem",
    },
    iconBox: {
      marginY: "2rem",
      display: "flex",
      flexDirection: "row",
      gap: "2rem",
      alignItems: "center",
    },
    icon: {
      padding: "1rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      backgroundColor: "#2871AE",
      borderRadius: "12px",
    },
    boldAddres: {
      fontSize: "1.3rem",
      color: "black",
      fontWeight: 600,
      marginBottom: "0.3rem",
    },
    details: {
      color: "grey",
      fontSize: "1rem",
    },
    size: {
      fontSize: "2rem",
    },
    justify: {
      justifyContent: "space-between",
    },
    btn: {
      fontSize: "1.5rem",
      padding: "0.5rem",
      color: "white",
      backgroundColor: "#05365F",
      paddingX: "2rem",
      marginY: "1rem",
      ":hover": {
        color: "#05365F",
        backgroundColor: "white",
        border: "2px solid #05365F",
      },
      fontFamily: "poppins",
    },
    mainGrid: {
      justifyContent: "space-around",
    },
  };
  return (
    <Box>
      <Container className={responsive.container}>
        <Box sx={style.spacing}>
          <Grid container sx={style.mainGrid}>
            <Grid item lg={4}>
              <Box>
                <BeforeHeadSmall text="INFORMATION" />
                <HeadingH2 text="Get in Touch" />
                <Typography sx={style.paragraph}>
                  Want to know more about our home and building renovation
                  services? Connect with us, by writing us a message, or calling
                  us. Our representatives will reach out within 24 hours.
                </Typography>
                <Box sx={style.mainIconDiv}>
                  <Box sx={style.iconBox}>
                    <Box sx={style.icon}>
                      <LocationOnIcon sx={style.size} />
                    </Box>
                    <Box>
                      <Typography sx={style.boldAddres}>
                        P.O. BOX Address
                      </Typography>
                      <Typography sx={style.details}>
                        74 Brookview Drive
                      </Typography>
                      <Typography sx={style.details}>
                        Monroe, NY 10950
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={style.iconBox}>
                    <Box sx={style.icon}>
                      <MailOutlineIcon sx={style.size} />
                    </Box>
                    <Box>
                      <Typography sx={style.boldAddres}>
                        E-mail us for information
                      </Typography>
                      <Typography sx={style.details}>
                        info@hammeronstudios.com
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={style.iconBox}>
                    <Box sx={style.icon}>
                      <WifiCalling3Icon sx={style.size} />
                    </Box>
                    <Box>
                      <Typography sx={style.boldAddres}>Phone</Typography>
                      <Typography sx={style.details}>(845) 837-2616</Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={4}>
              <BeforeHeadSmall text="BOOKING FORM" />
              <HeadingH2 text="Send Us Message" />
              <Grid container sx={style.justify} columnSpacing={3}>
                <Grid item lg={6}>
                  <input className={styles.feildC} placeholder="Name" />
                </Grid>
                <Grid item lg={6}>
                  <input className={styles.feildC} placeholder="phone" />
                </Grid>
                <Grid item lg={12}>
                  <input
                    className={styles.feildC}
                    placeholder="email address"
                  />
                </Grid>
                <Grid item lg={6}>
                  <input className={styles.feildC} placeholder="state" />
                </Grid>
                <Grid item lg={6}>
                  <input className={styles.feildC} placeholder="city" />
                </Grid>
                <Grid item lg={12}>
                  <input className={styles.feildC} placeholder="service" />
                </Grid>
                <Grid item lg={12}>
                  <input
                    className={styles.feildC}
                    placeholder="message"
                    style={{ height: "100px" }}
                  />
                </Grid>
              </Grid>
              <Box clasName={poppins.className}>
                <Button sx={style.btn}>SUBMIT</Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default Form;
