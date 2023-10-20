import {
  Container,
  Box,
  Typography,
  Stack,
  Grid,
  Divider,
} from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import responsive from "../styles/responsive.module.css";
import styles from "../styles/style.module.css";
import footerLogo from "../assets/images/cas.webp";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";

function Footer() {
  const [isMouseInside, setIsMouseInside] = useState([false, false, false]);

  const handleMouseEnter = (index) => {
    setIsMouseInside((prev) => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });
  };

  const handleMouseLeave = (index) => {
    setIsMouseInside((prev) => {
      const updated = [...prev];
      updated[index] = false;
      return updated;
    });
  };
  const style = {
    flex: {
      display: "flex",
      marginTop: "2rem",
    },
    socialStyle: {
      width: "50px",
      height: "50px",
      backgroundColor: "#2E2F31",
      borderRadius: "5px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      ":hover": {
        backgroundColor: "white",
        transform: "scale(1.1)",
        transition: "all ease 0.5s",
      },
    },
    footerAlign: {
      justifyContent: { md: "space-between", xs: "center" },
      gap: { md: "0px", sm: "1rem", xs: "10px" },
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
    copright: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: "1rem",
    },
    page: {
      color: "white",
      ":hover": {
        color: "#3FBDF9",
        transition: "all ease 0.5s",
      },
    },
    page1: {
      color: "white",
      paddingX: "0.5rem",
      borderRight: "1px solid white",
      ":hover": {
        color: "#3FBDF9",
        transition: "all ease 0.5s",
        borderRight: "1px solid #3FBDF9",
      },
    },
    footerPage: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "1rem",
    },
  };
  return (
    <>
      <Stack className={styles.footer}>
        <Container className={responsive.container}>
          <Grid container sx={style.footerAlign}>
            <Grid item lg={2}>
              <Box>
                <Image
                  src={footerLogo}
                  width={212}
                  height={144}
                  style={{ width: "212px", height: "144px" }}
                  alt="oops"
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
                  <Box
                    sx={style.socialStyle}
                    onMouseEnter={() => handleMouseEnter(0)}
                    onMouseLeave={() => handleMouseLeave(0)}
                  >
                    <FacebookIcon
                      sx={{
                        color: isMouseInside[0] ? "#2296E6" : "white",
                        fontSize: "1.2rem",
                      }}
                    />
                  </Box>
                </Link>
                <Link href="https://www.instagram.com/hammeronstudiosllc/">
                  <Box
                    sx={style.socialStyle}
                    onMouseEnter={() => handleMouseEnter(1)}
                    onMouseLeave={() => handleMouseLeave(1)}
                  >
                    <InstagramIcon
                      sx={{
                        color: isMouseInside[1] ? "#2296E6" : "white",
                        fontSize: "1.2rem",
                      }}
                    />
                  </Box>
                </Link>
                <Link href="https://www.tiktok.com/@hammer.on.studios">
                  <Box
                    sx={[style.socialStyle, { padding: "15px" }]}
                    onMouseEnter={() => handleMouseEnter(2)}
                    onMouseLeave={() => handleMouseLeave(2)}
                  >
                    <Image
                      src={"/tik-tok.png"}
                      width={16}
                      height={16}
                      alt="oops"
                    />
                  </Box>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>

        <Divider
          sx={{
            backgroundColor: "#242424",
            marginY: "1rem",
          }}
        />
        <Container className={responsive.container}>
          <Box sx={style.copright}>
            <Typography sx={{ color: "grey" }}>
              © Copyright Hammer-On Studios 2022. All Right Reserved.
            </Typography>
            <Box sx={style.footerPage}>
              <Link
                href="/privacy-policy-2"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Typography sx={style.page1}>Privacy Policy</Typography>
              </Link>
              <Link
                href="/terms-conditions"
                style={{
                  textDecoration: "none",
                  color: "white",
                  listStyle: "none",
                }}
              >
                <Typography sx={style.page}>Terms & Condition</Typography>
              </Link>
            </Box>
          </Box>
        </Container>
      </Stack>
    </>
  );
}

export default Footer;
