import { Container, Box, Typography, Button, Grid } from "@mui/material";
import React from "react";
import responsive from "../../styles/responsive.module.css";
import HeadingH2 from "../Commons/HeadingH2";
import StripSection from "../Commons/Stripe";
import styles from "../../styles/style.module.css";
import roof1 from "../../assets/images/roof1.jpg";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import Image from "next/image";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

function Blogs() {
  const style = {
    marginHead: {
      marginY: "3rem",
    },
    cardIconBox: {
      display: "flex",
      flexDirection: "row",
      gap: "2rem",
      marginY: "1rem",
    },
    color: {
      color: "#2871ae",
      fontSize: "1.5rem",
    },
    flexOnIcon: {
      display: "flex",
      flexDirection: "row",
      gap: "1rem",
    },
    cardIconBox1: {
      display: "flex",
      flexDirection: "row",
      gap: "1rem",
      marginY: "1rem",
      alignItems: "center",
    },
  };
  const CardData = [
    {
      title: "Revitalizing Workspaces and Ensuring Flat Roof Repair",
    },
    {
      title:
        "Quality Kitchen and Bath Remodels by Home Renovation Contractors in NYC",
    },
    {
      title:
        "Expert Solutions for Flat Roof Repair in NYC and Office Renovation Contractors in New York",
    },
    {
      title:
        "Log Home Repair and Restoration: Preserving the Beauty of Your Abode",
    },
    {
      title:
        "Elevating Spaces: Commercial Bathroom and Building Remodeling Contractors in New York",
    },
    {
      title: "Essential Tips for Flat Roof Repair in NYC",
    },
    {
      title:
        "Importance of Quality Kitchen and Bath Remodels and Flat Roof Repair",
    },

    {
      title: "Flat Roof Repair in NYC and Basement Remodeling Contractors",
    },
    {
      title: "Repairing and Renovating Your Home: A Guide",
    },
    {
      title:
        "Top Commercial and Home Renovation Contractors in New York – Monroe and NYC",
    },
  ];
  return (
    <Box>
      <StripSection heading="LATEST NEWS" />
      <Container className={responsive.container}>
        <Box sx={style.marginHead}>
          <HeadingH2 text="Latest News" align="center" />
        </Box>
        <Grid container>
          {CardData.map((data) => {
            return (
              <Grid item lg={4}>
                <Box className={styles.cardBox}>
                  <Box className={styles.cardImg}>
                    <Box>
                      <Image src={roof1} alt="oops" />
                    </Box>
                    <Box className={styles.itemdate}>
                      <CalendarMonthIcon />
                      June 22, 2023
                    </Box>
                  </Box>
                  <Box className={styles.cardContent}>
                    <Typography variant="h3" className={styles.cardHeading}>
                      {data.title}
                    </Typography>
                    <Box sx={style.cardIconBox}>
                      <Box sx={style.flexOnIcon}>
                        <PersonIcon sx={style.color} />
                        <Typography>admin</Typography>
                      </Box>
                      <Box sx={style.flexOnIcon}>
                        <ForumIcon sx={style.color} />
                        <Typography>comments : 0</Typography>
                      </Box>
                    </Box>
                    <Box sx={style.cardIconBox1}>
                      <Typography className={styles.readMore}>
                        READ MORE
                      </Typography>
                      <ArrowCircleRightIcon className={styles.readMore1} />
                    </Box>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}

export default Blogs;
