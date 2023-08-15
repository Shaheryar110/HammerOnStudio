import { Container, Box, Typography, Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";

import styles from "../../src/styles/style.module.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import Image from "next/image";
import Layout from "@/Components/Layout";
import { Router, useRouter } from "next/router";
import dril from "../../src/assets/images/dril.webp";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import axios from "axios";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
function slug() {
  const router = useRouter();
  const parameter = router.query.slug;
  console.log(parameter, "parameter");
  const style = {
    imgWithDate: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginY: "4rem",
    },
    container: {
      maxWidth: { xl: "1300px", lg: "1200px" },
    },
    cardIconBox: {
      display: "flex",
      flexDirection: "row",
      gap: "1rem",
    },
    cardContent: {
      padding: "2rem",
    },
    text: { marginY: "2rem", paddingX: "2rem" },
    heading: {
      fontWeight: 700,
    },
    flexOnIcon: {
      display: "flex",
      flexDirection: "row",
      gap: "1rem",
      color: "#2871AE",
    },
    buttonBox: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      marginBottom: "2rem",
    },
    next: {
      display: "flex",
      flexDirection: "column",
      alignItems: "end",
      width: "310px",
    },
    prev: {
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
      width: "310px",
    },
  };
  const [detailBlog, setDetailBlogs] = useState([]);
  useEffect(() => {
    axios
      .get(`https://172.16.100.76:5001/api/blogsDetails?slug=${parameter}`)
      .then((res) => {
        setDetailBlogs(res.data);
      });
  }, []);
  useEffect(() => {
    console.log(detailBlog?.currentBlog?.date, "curent");
  }, [detailBlog]);
  const nextBlog = () => {
    router.push(`/${detailBlog?.nextBlog?.slug}`);
  };
  const PrevBlog = () => {
    router.push(`/${detailBlog?.previousBlog?.slug}`);
  };
  return (
    <>
      <Layout>
        <Container sx={style.container}>
          <Box sx={style.imgWithDate}>
            <Box className={styles.cardBox}>
              <Box className={styles.cardImg}>
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",

                    borderRadius: "1rem",
                  }}
                >
                  <Image
                    src={detailBlog?.currentBlog?.image}
                    style={{ width: "100%", height: "100%" }}
                    width={900}
                    height={600}
                  />
                </Box>
                <Box className={styles.itemdate}>
                  <CalendarMonthIcon />

                  {detailBlog?.currentBlog?.date}
                </Box>
              </Box>
              <Box sx={style.cardContent}>
                <Box sx={style.cardIconBox}>
                  <Box sx={style.flexOnIcon}>
                    <PersonIcon sx={{ color: "inherit" }} />
                    <Typography sx={{ color: "inherit" }}>by admin</Typography>
                  </Box>
                  <Box sx={style.flexOnIcon}>
                    <LocalOfferIcon sx={{ color: "inherit" }} />
                    <Typography sx={{ color: "inherit" }}>
                      Uncatgorized
                    </Typography>
                  </Box>
                  <Box sx={style.flexOnIcon}>
                    <ForumIcon sx={{ color: "inherit" }} />
                    <Typography sx={{ color: "inherit" }}>
                      comments : 0
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box sx={style.text}>
                <Typography variant="h5" sx={style.heading}>
                  {detailBlog?.currentBlog?.heading}
                </Typography>
                <Typography sx={{ marginY: "1rem" }}>
                  {detailBlog?.currentBlog?.data}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={style.buttonBox}>
            <Box sx={style.prev}>
              <Button sx={{ fontWeight: 700 }} onClick={PrevBlog}>
                <KeyboardBackspaceIcon /> Previous Button{" "}
              </Button>
              <Typography sx={{ fontWeight: 700, width: "310px" }}>
                {detailBlog?.previousBlog?.heading}
              </Typography>
            </Box>
            <Box sx={style.next}>
              <Button sx={{ fontWeight: 700 }} onClick={nextBlog}>
                Next Button <ArrowRightAltIcon />
              </Button>
              <Typography sx={{ fontWeight: 700, width: "310px" }}>
                {detailBlog?.nextBlog?.heading}
              </Typography>
            </Box>
          </Box>
        </Container>
      </Layout>
    </>
  );
}

export default slug;
