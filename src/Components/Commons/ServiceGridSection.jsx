import { Container, Box, Typography, Stack, Grid } from "@mui/material";
import React from "react";
import responsive from "../../styles/responsive.module.css";
import styles from "../../styles/style.module.css";
import BeforeHeadSmall from "../Commons/BeforeHeadSmall";
import HeadingH2 from "../Commons/HeadingH2";
import labours from "../../assets/images/labours.jpg";
import Image from "next/image";

function Content({ smallHeading, mainHeading, para1, para2, src, order }) {
  const style = {
    sapcing: {
      marginY: "5rem",
      justifyContent: "space-between",
    },
    para: {
      marginY: "20px",
      color: "#817173",
      fontSize: "1rem",
    },
    rightSide: {},
  };
  return (
    <>
      <Box>
        <Grid container sx={style.sapcing}>
          <Grid item lg={6} style={{ order: order ? 2 : 1 }}>
            <BeforeHeadSmall text={smallHeading} />
            <HeadingH2 text={mainHeading} />
            <Typography sx={style.para}>{para1}</Typography>
            <Typography sx={style.para}>{para2}</Typography>
          </Grid>
          <Grid item lg={5} style={{ order: order ? 1 : 2 }}>
            <Box>
              <Image
                src={src}
                fill={false}
                style={{ width: "100%", height: "100%" }}
                className="imgs"
                alt="oops"
                priority
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Content;
