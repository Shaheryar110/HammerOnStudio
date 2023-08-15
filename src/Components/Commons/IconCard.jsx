import React, { useState } from "react";
import { Container, Box, Typography, Stack, Grid } from "@mui/material";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
function IconCard({ icon, heading, para, hoverIcon }) {
  const [iconHover, setIconHover] = useState(false);
  const mouseEnter = () => {
    setIconHover(true);
  };
  const mouseExit = () => {
    setIconHover(false);
  };
  const style = {
    media: {
      padding: "1rem",
      display: "flex",
      alignItems: "flex-start",
    },
    iconBox: {
      width: "70px",
      height: "70px",
      backgroundColor: "#fff1f2",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "100%",
      ":hover": {
        backgroundColor: "#2871ae",
        color: "white",
        transition: "all ease 1",
      },
    },
    mediaBody: {
      marginLeft: "25px",
      flex: 1,
    },
    heading: {
      color: "#393738",
      fontSize: "20px",
      margin: "0px 0px 20px",
      fontWeight: 600,
      lineHeight: 1.2,
    },
    text: {
      marginTop: "15px",
      fontSize: "17px",
      fontWeight: 400,
      lineHeight: "28px",
      lineHeight: 1.7,
      color: "#7A7A7A",
    },
    hover: {
      width: "70px",
      height: "70px",
      backgroundColor: "#fff1f2",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "100%",
      backgroundColor: "#2871ae",
      color: "white",
      transition: "all ease 1",
    },
  };
  return (
    <Box sx={style.media} onMouseEnter={mouseEnter} onMouseLeave={mouseExit}>
      <Box sx={[style.iconBox, iconHover && style.hover]}>
        {!iconHover && <Image src={icon} fill={false} />}
        {iconHover && <Image src={hoverIcon} fill={false} />}
      </Box>
      <Box sx={style.mediaBody}>
        <Typography variant="h4" sx={style.heading} className={inter.className}>
          {heading}
        </Typography>
        <Typography sx={style.text}>{para}</Typography>
      </Box>
    </Box>
  );
}

export default IconCard;
