import "@/styles/globals.css";
import NextTopLoader from "nextjs-toploader";
import axios from "axios";
import https from "https";

axios.defaults.httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});
export default function App({ Component, pageProps }) {
  return (
    <>
      <NextTopLoader />
      <Component {...pageProps} />
    </>
  );
}
// import { Container, Box, Typography, Button, Grid } from "@mui/material";
// import React, { useEffect, useState } from "react";
// import styles from "../../../src/styles/style.module.css";
// import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
// import PersonIcon from "@mui/icons-material/Person";
// import ForumIcon from "@mui/icons-material/Forum";
// import Image from "next/image";
// import Layout from "@/Components/Layout";
// import { useRouter } from "next/router";
// import LocalOfferIcon from "@mui/icons-material/LocalOffer";
// import axios from "axios";
// import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
// import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
// import { Roboto } from "next/font/google";
// import { URI } from "../../../src/uri";
// import Head from "next/head";
// import blogCss from "../../Components/Blogs/blog.module.css";
// import Script from "next/script";

// const roboto = Roboto({
//   subsets: ["latin"],
//   weight: ["400"],
// });
// function Dynamic({ blogName }) {
//   const style = {
//     imgWithDate: {
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       marginY: "4rem",
//     },
//     container: {
//       maxWidth: { xl: "1300px", lg: "1200px" },
//     },
//     cardIconBox: {
//       display: { sm: "flex", xs: "block" },
//       flexDirection: "row",
//       gap: "1rem",
//     },
//     cardContent: {
//       padding: "2rem",
//     },
//     text: { marginY: "2rem", paddingX: "2rem" },
//     heading: {
//       fontWeight: 700,
//       marginY: "1rem",
//     },
//     flexOnIcon: {
//       display: "flex",
//       flexDirection: "row",
//       gap: "1rem",
//       color: "#2871AE",
//     },
//     buttonBox: {
//       display: "flex",
//       flexDirection: "row",
//       justifyContent: "space-between",
//       alignItems: "center",
//       width: "100%",
//       marginBottom: "2rem",
//     },
//     next: {
//       display: "flex",
//       flexDirection: "column",
//       alignItems: "end",

//       backgroundColor: "white",
//       borderRadius: "10px",

//       paddingY: "0.5rem",
//       width: "100%",
//     },
//     prev: {
//       display: "flex",
//       flexDirection: "column",
//       alignItems: "start",

//       backgroundColor: "white",
//       borderRadius: "10px",
//       width: "100%",
//       paddingY: "0.5rem",
//     },
//   };

//   const nextBlog = () => {
//     router.push(`/${blogName?.nextBlog?.slug}`);
//   };
//   const PrevBlog = () => {
//     router.push(`/${blogName?.previousBlog?.slug}`);
//   };
//   return (
//     <>
//       {/* <Head>
//         <Script
//           async
//           src="https://www.googletagmanager.com/gtag/js?id=G-4XF3Y3MXGZ"
//         ></Script>
//         <Script>
//           window.dataLayer = window.dataLayer || [];
//           {function gtag() {
//             dataLayer.push(arguments);
//           }}
//           gtag('js', new Date()); gtag('config', 'G-4XF3Y3MXGZ');
//         </Script>
//         <link rel="icon" href="/favicon.webp" />
//         <title>{parameter}</title>
//       </Head>
//       <Layout>
//         <Container sx={style.container}>
//           <Box sx={style.imgWithDate}>
//             <Box className={styles.cardBox}>
//               <Box className={styles.cardImg}>
//                 <Box
//                   sx={{
//                     width: "100%",
//                     height: "100%",
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",

//                     borderRadius: "1rem",
//                   }}
//                 >
//                   <div className={blogCss.imageContainer}>
//                     <Image
//                       src={detailBlog?.currentBlog?.image}
//                       style={{ width: "100%", height: "100%" }}
//                       width={900}
//                       height={600}
//                       alt="oops"
//                       className={blogCss.zoomableDesc}
//                     />
//                     <div className={blogCss.overlay}></div>
//                   </div>
//                 </Box>
//                 <Box className={styles.itemdate}>
//                   <CalendarMonthIcon />

//                   {detailBlog?.currentBlog?.date}
//                 </Box>
//               </Box>
//               <Box sx={style.cardContent}>
//                 <Box sx={style.cardIconBox}>
//                   <Box sx={style.flexOnIcon}>
//                     <PersonIcon sx={{ color: "inherit" }} />
//                     <Typography sx={{ color: "inherit" }}>by admin</Typography>
//                   </Box>
//                   <Box sx={style.flexOnIcon}>
//                     <LocalOfferIcon sx={{ color: "inherit" }} />
//                     <Typography sx={{ color: "inherit" }}>
//                       Uncatgorized
//                     </Typography>
//                   </Box>
//                   <Box sx={style.flexOnIcon}>
//                     <ForumIcon sx={{ color: "inherit" }} />
//                     <Typography sx={{ color: "inherit" }}>
//                       comments : 0
//                     </Typography>
//                   </Box>
//                 </Box>
//               </Box>
//               <Box sx={style.text}>
//                 <Typography variant="h5" sx={style.heading}>
//                   {detailBlog?.currentBlog?.heading}
//                 </Typography>
//                 <div
//                   style={{
//                     marginY: "1rem",
//                     color: "grey",
//                     fontSize: "1rem",
//                   }}
//                   dangerouslySetInnerHTML={{
//                     __html: detailBlog?.currentBlog?.data,
//                   }}
//                   className={roboto.className}
//                 />
//               </Box>
//             </Box>
//           </Box>
//           <Grid container justifyContent="center" marginBottom="2rem">
//             <Grid
//               item
//               lg={5}
//               sm={6}
//               xs={12}
//               sx={{ border: ".5px solid #E4E4E4" }}
//             >
//               <Box sx={style.prev}>
//                 <Button
//                   sx={{
//                     fontWeight: 700,
//                     display: detailBlog?.previousBlog?.heading
//                       ? "flex"
//                       : "none",
//                   }}
//                   onClick={PrevBlog}
//                 >
//                   <KeyboardBackspaceIcon /> Previous Button{" "}
//                 </Button>
//                 <Typography
//                   sx={{
//                     fontWeight: 700,
//                     width: "50%",
//                     paddingX: "0.5rem",
//                     cursor: "pointer",
//                     ":hover": {
//                       color: "#1976D2",
//                       transition: "all ease 0.5s",
//                     },
//                   }}
//                 >
//                   {detailBlog?.previousBlog?.heading}
//                 </Typography>
//               </Box>
//             </Grid>
//             <Grid
//               item
//               lg={5}
//               sm={6}
//               xs={12}
//               sx={{ border: ".5px solid #E4E4E4" }}
//             >
//               <Box sx={style.next}>
//                 <Button sx={{ fontWeight: 700 }} onClick={nextBlog}>
//                   Next Button <ArrowRightAltIcon />
//                 </Button>
//                 <Typography
//                   sx={{
//                     fontWeight: 700,
//                     width: "50%",
//                     paddingX: "0.5rem",
//                     cursor: "pointer",
//                     ":hover": {
//                       color: "#1976D2",
//                       transition: "all ease 0.5s",
//                     },
//                   }}
//                 >
//                   {detailBlog?.nextBlog?.heading}
//                 </Typography>
//               </Box>
//             </Grid>
//           </Grid>
//         </Container>
//       </Layout> */}
//       <h1>{blogName.slug}</h1>
//     </>
//   );
// }

// const getPostByName = async (slugParams) => {
//   const daata = await axios.get(
//     `https://backend.hammeronstudios.com:3000/api/blogsDetails?slug=${slugParams}`
//   );
//   return daata;
// };

// export async function getStaticProps(context) {
//   const blogSlug = context.params.slug;
//   const SingleblogName = await getPostByName(blogSlug);
//   return {
//     props: {
//       blogName: SingleblogName,
//     },
//   };
// }

// export async function getStaticPaths() {
//   let repo = [];

//   let allBlogs = await fetch(
//     `https://backend.hammeronstudios.com:3000/api/blogs`
//   );
//   repo = await allBlogs.json();
//   console.log(repo, "repo");

//   const paths = repo?.map((post) => ({
//     params: { slug: post.slug },
//   }));
//   console.log(paths, "paths");
//   return {
//     paths: paths,
//     fallback: "blocking",
//   };
// }

// export default Dynamic;
