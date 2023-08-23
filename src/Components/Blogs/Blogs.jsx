import { Container, Box, Typography, Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
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
import getAllBlogs from "@/service/getAllBlogs";
import axios from "axios";
import Link from "next/link";
import { URI } from "../../uri";
import Head from "next/head";
import blogCss from "./blog.module.css";
import CircularProgress from "@mui/material/CircularProgress";
function Blogs({ posts }) {
  const style = {
    container: {
      maxWidth: { lg: "1450px", md: "1250px" },
    },
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
      cursor: "pointer",
      display: "flex",
      flexDirection: "row",
      gap: "1rem",
      marginY: "1rem",
      alignItems: "center",
      ":hover": {
        color: "blue",
      },
    },
    cardHeading: {
      fontWeight: 700,
      marginBottom: "15px",
      fontSize: "1rem",
      lineHeight: "36px",
    },
    cardContent: {
      padding: "30px 30px 0px",
      backgroundColor: "white",
      height: "240px",
    },
    readMore: {
      color: "#707173",
      fontSize: "15px",
      ":hover": {
        color: "#2871ae",
      },
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
  const [pic, setPic] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setLoader(true);
    axios.get(`https://${URI}:5001/api/blogs`).then((res) => {
      setPic(res.data);
      console.log(pic, "pic");
      setLoader(false);
    });
  }, []);
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.webp" />
        <title>Blogs</title>
      </Head>
      {loader && <CircularProgress />}
      {!loader && (
        <Box>
          <StripSection heading="LATEST NEWS" />
          <Container sx={style.container}>
            <Box sx={style.marginHead}>
              <HeadingH2 text="Latest News" align="center" />
            </Box>
            <Grid container justifyContent="center">
              {pic?.map((data) => {
                return (
                  <Grid item lg={4} md={6}>
                    <Box className={styles.cardBox}>
                      <Box className={styles.cardImg}>
                        <Box>
                          <Image
                            src={data?.image}
                            style={{ width: "100%" }}
                            width={420}
                            height={300}
                            alt={data.id}
                            priority={true}
                            className={blogCss.zoomableImage}
                          />
                        </Box>
                        <Box className={styles.itemdate}>
                          <CalendarMonthIcon />
                          {data?.date}
                        </Box>
                      </Box>
                      <Box sx={style.cardContent}>
                        <Typography variant="h3" sx={style.cardHeading}>
                          {data?.heading}
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
                        <Link
                          style={{
                            textDecoration: "none",
                            listStyle: "none",
                            color: "inherit",
                          }}
                          href={data?.slug}
                        >
                          <Box sx={style.cardIconBox1}>
                            <Typography sx={style.readMore}>
                              READ MORE
                            </Typography>
                            <ArrowCircleRightIcon
                              className={styles.readMore1}
                            />
                          </Box>
                        </Link>
                      </Box>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </Container>
        </Box>
      )}
    </>
  );
}

export default Blogs;
