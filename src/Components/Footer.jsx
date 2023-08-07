import { Container, Box, Typography, Stack, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import responsive from "../styles/responsive.module.css";
import styles from "../styles/style.module.css";
import footerLogo from "../assets/images/cas.png";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";

function Footer() {
  const style = {
    flex: {
      display: "flex",
      marginTop: "2rem",
    },
    socialStyle: {
      padding: "0.5rem",
      backgroundColor: "#2E2F31",
      borderRadius: "10px",
    },
    footerAlign: {
      justifyContent: "space-between",
    },
    small: {
      color: "white",
      fontWeight: 700,
      fontSize: "1.3rem",
    },
    contact: {
      color: "white",
      fontWeight: 700,
      fontSize: "1.3rem",
    },
    IconStyle: {
      backgroundColor: "#2296e6",
      width: "60px",
      height: "60px",
      alignItems: "center",
      display: "flex",
      borderRadius: "100%",
      color: "white",
      justifyContent: "center",
    },
    phoneIcon: {
      fontSize: "2rem",
    },
  };
  return (
    <>
      <Stack className={styles.footer}>
        <Container sx={responsive.container}>
          <Grid container sx={style.footerAlign}>
            <Grid item lg={2}>
              <Box>
                <Image
                  src={footerLogo}
                  style={{ width: "212px", height: "144px" }}
                />
              </Box>
            </Grid>
            <Grid item lg={6}>
              <Box className={styles.cta}>
                <Box sx={style.flex}>
                  <Box sx={style.IconStyle}>
                    <PhoneIcon sx={style.phoneIcon} />
                  </Box>
                  <Box className={styles.mediaBody}>
                    <Typography sx={style.small}>
                      Need any renovation help?
                    </Typography>
                    <Typography sx={style.contact}>
                      Contact Us: (845) 837-2616
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={2}>
              <Box className={styles.footSocial}>
                <Link href="https://www.facebook.com/HammerOnStudios">
                  <Box sx={style.socialStyle}>
                    <FacebookIcon sx={{ color: "white", fontSize: "2rem" }} />
                  </Box>
                </Link>
                <Link href="https://www.instagram.com/hammeronstudiosllc/">
                  <Box sx={style.socialStyle}>
                    <InstagramIcon sx={{ color: "white", fontSize: "2rem" }} />
                  </Box>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Stack>
    </>
  );
}

export default Footer;
