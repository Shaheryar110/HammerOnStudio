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
import Skeleton from "@mui/material/Skeleton";

function Blogs() {
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
    },
    readMore: {
      color: "#707173",
      fontSize: "15px",
      ":hover": {
        color: "#2871ae",
      },
    },
    cardBox: {
      boxShadow: "0px 5px 59px 0px rgba(0, 0, 0, 0.31)",
      borderRadius: "1rem",
      overflow: "hidden",
      width: { sm: "90%", xs: "100%" },
      marginBottom: "3rem",
    },
  };

  const [pic, setPic] = useState([]);

  const [loader, setLoader] = useState(true);
  useEffect(() => {
    axios.get(`https://${URI}:3000/api/blogs`).then((res) => {
      setPic(res.data);
      setLoader(false);
    });
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.webp" />
      </Head>
      {loader && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            width: "100%",
            marginY: "5rem",
          }}
        >
          <CircularProgress />
        </Box>
      )}
      {!loader && (
        <Box>
          <StripSection heading="LATEST NEWS" />
          <Container sx={style.container}>
            <Box sx={style.marginHead}>
              <HeadingH2 text="Latest News" align="center" />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Typography
                  sx={{
                    paddingY: "12px",
                    maxWidth: "700px",
                    textAlign: "center",
                  }}
                >
                  Read our blogs on topics like{" "}
                  <span style={{ fontWeight: 600 }}>
                    ‘What is green basement remodeling'?{" "}
                  </span>
                  And{" "}
                  <span style={{ fontWeight: 600 }}>
                    'How to find the best office renovation contractor?'
                  </span>
                </Typography>
                <Typography
                  sx={{
                    paddingY: "12px",
                    maxWidth: "700px",
                    textAlign: "center",
                  }}
                >
                  Moreover, weekly blogs include exploring Quality Kitchen and
                  Bath Remodels in Rockland County and Quality Kitchen and Bath
                  Remodels in Putnam County.{" "}
                </Typography>
              </Box>
            </Box>
            <Grid container justifyContent="center">
              {pic?.map((data, index) => {
                return (
                  <Grid item lg={4} md={6} key={index}>
                    <Box sx={style.cardBox}>
                      <Box className={styles.cardImg}>
                        <Box>
                          <Image
                            src={data?.image}
                            style={{ width: "100%", height: "auto" }}
                            width={420}
                            height={300}
                            alt={data.id}
                            priority={true}
                            // alt="oops"
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
                          href={`/${data?.slug}`}
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
