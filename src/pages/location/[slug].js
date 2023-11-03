import Layout from "@/Components/Layout";
import { URI } from "@/uri";
import { Box, Container, Typography } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
  Installation,
  secondObject,
  thirdObject,
  fourthObject,
  fifthObject,
} from "@/utils/locationData";

export default function Locations() {
  const router = useRouter();

  const [data, setData] = useState();
  const conditionFunc = (repo) => {
    if (repo === "Installation") {
      setData(Installation);
    } else if (repo === "Renovations") {
      setData(secondObject);
    } else if (repo === "Construction") {
      setData(thirdObject);
    } else if (repo === "Roofing") {
      setData(fourthObject);
    } else if (repo === "Haverstraw") {
      setData(fifthObject);
    }
  };
  useEffect(() => {
    const repo = router.query.slug;
    conditionFunc(repo);
  }, []);
  useEffect(() => {
    const repo = router.query.slug;
    conditionFunc(repo);
  }, [router]);

  return (
    <>
      <Head>
        <title>{data?.metaTitle}</title>
        <meta name="description" content={data?.metaDesc} />
      </Head>
      <Layout>
        <Box sx={style.mainBox}>
          <Container sx={style.container}>
            <Box sx={style.contentBox}>
              <Typography sx={style.heading}>{data?.heading}</Typography>
              <Typography sx={style.para}>{data?.paragraph}</Typography>
            </Box>
          </Container>
        </Box>
      </Layout>
    </>
  );
}
// export async function getStaticPaths() {
//   return {
//     paths: [],
//     fallback: "blocking",
//   };
// }
// export async function getStaticProps() {

//   return { props: { repo } };
// }
const style = {
  mainBox: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  container: {
    maxWidth: { lg: "1400px" },
  },
  contentBox: {
    textAlign: "center",
    marginY: "7rem",
  },
  heading: {
    fontSize: "2rem",
    fontWeight: 700,
  },
  para: {
    paddingY: "1rem",
    opacity: 0.8,
    color: "black",
  },
};
