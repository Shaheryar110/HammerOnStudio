import { URI } from "@/uri";
import { servicesArray } from "@/utils/locationData";
import axios from "axios";
import blogCss from "../Components/Blogs/blog.module.css";
import styles from "../../src/styles/style.module.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Layout from "@/Components/Layout";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ForumIcon from "@mui/icons-material/Forum";
import { Roboto } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/router";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
});
export default function DetailBlogs(props) {
  const router = useRouter();
  const nextBlog = () => {
    router.push(`/${props.post?.nextBlog?.slug}`);
  };
  const PrevBlog = () => {
    router.push(`/${props.post?.previousBlog?.slug}`);
  };

  return (
    <>
      <>
        <Head>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-4XF3Y3MXGZ"
          ></script>
          <script>
            window.dataLayer = window.dataLayer || [];
            {function gtag() {
              dataLayer.push(arguments);
            }}
            gtag('js', new Date()); gtag('config', 'G-4XF3Y3MXGZ');
          </script>
          <link rel="icon" href="/favicon.webp" />
          <title>{props.post?.currentBlog?.heading}</title>
        </Head>
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
                    <div className={blogCss.imageContainer}>
                      <Image
                        src={props.post?.currentBlog?.image}
                        style={{ width: "100%", height: "100%" }}
                        width={900}
                        height={600}
                        alt="oops"
                        className={blogCss.zoomableDesc}
                      />
                      <div className={blogCss.overlay}></div>
                    </div>
                  </Box>
                  <Box className={styles.itemdate}>
                    <CalendarMonthIcon />

                    {props.post?.currentBlog?.date}
                  </Box>
                </Box>
                <Box sx={style.cardContent}>
                  <Box sx={style.cardIconBox}>
                    <Box sx={style.flexOnIcon}>
                      <PersonIcon sx={{ color: "inherit" }} />
                      <Typography sx={{ color: "inherit" }}>
                        by admin
                      </Typography>
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
                    {props.post?.currentBlog?.heading}
                  </Typography>
                  <div
                    style={{
                      marginY: "1rem",
                      color: "grey",
                      fontSize: "1rem",
                    }}
                    dangerouslySetInnerHTML={{
                      __html: props.post?.currentBlog?.data,
                    }}
                    className={roboto.className}
                  />
                </Box>
              </Box>
            </Box>
            <Grid container justifyContent="center" marginBottom="2rem">
              <Grid
                item
                lg={5}
                sm={6}
                xs={12}
                sx={{ border: ".5px solid #E4E4E4" }}
              >
                <Box sx={style.prev}>
                  <Button
                    onClick={PrevBlog}
                    sx={{
                      fontWeight: 700,
                      display: props.post?.previousBlog?.heading
                        ? "flex"
                        : "none",
                    }}
                  >
                    {/* <Link href={`/${props.post?.previousBlog?.slug}`}> */}
                    <KeyboardBackspaceIcon /> Previous Button {/* </Link> */}
                  </Button>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      width: "50%",
                      paddingX: "0.5rem",
                      cursor: "pointer",
                      ":hover": {
                        color: "#1976D2",
                        transition: "all ease 0.5s",
                      },
                    }}
                  >
                    {props.post?.previousBlog?.heading}
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                lg={5}
                sm={6}
                xs={12}
                sx={{ border: ".5px solid #E4E4E4" }}
              >
                <Box sx={style.next}>
                  <Button sx={{ fontWeight: 700 }} onClick={nextBlog}>
                    {/* <Link href={`/${props.post?.nextBlog?.slug}`}> */}
                    Next Button <ArrowRightAltIcon />
                    {/* </Link> */}
                  </Button>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      width: "50%",
                      paddingX: "0.5rem",
                      cursor: "pointer",
                      ":hover": {
                        color: "#1976D2",
                        transition: "all ease 0.5s",
                      },
                    }}
                  >
                    {props.post?.nextBlog?.heading}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Layout>
      </>
    </>
  );
}

export async function getServerSideProps(context) {
  const blogSlug = context.params.slug;

  let post = {};
  try {
    let specificData = await axios.get(
      `https://${URI}:3000/api/blogsDetails?slug=${blogSlug}`
    );
    post = specificData.data;
  } catch (err) {
    console.log(err);
  }
  return { props: { post } };
}
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
    display: { sm: "flex", xs: "block" },
    flexDirection: "row",
    gap: "1rem",
  },
  cardContent: {
    padding: "2rem",
  },
  text: { marginY: "2rem", paddingX: "2rem" },
  heading: {
    fontWeight: 700,
    marginY: "1rem",
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

    backgroundColor: "white",
    borderRadius: "10px",

    paddingY: "0.5rem",
    width: "100%",
  },
  prev: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",

    backgroundColor: "white",
    borderRadius: "10px",
    width: "100%",
    paddingY: "0.5rem",
  },
};
