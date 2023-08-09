import React, { useState } from "react";
import { Container, Box, Typography, Stack, Grid } from "@mui/material";

function IconCard({ icon, heading, para }) {
  const [iconHover, setIconHover] = useState(false);
  const mouseEnter = () => {
    setIconHover(true);
    // console.log(iconHover);
  };
  const mouseExit = () => {
    setIconHover(false);
    // console.log(iconHover);
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
      fontSize: "1.5rem",
      marginBottom: "0.5rem",
      fontWeight: 500,
      lineHeight: 1.2,
    },
    text: {
      marginTop: "15px",
      fontSize: "17px",
      fontWeight: 400,
      lineHeight: "28px",
      lineHeight: 1.7,
      margin: "30px 0",
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
      <Box sx={[style.iconBox, iconHover && style.hover]}>{icon}</Box>
      <Box sx={style.mediaBody}>
        <Typography variant="h4" sx={style.heading}>
          {heading}
        </Typography>
        <Typography sx={style.text}>{para}</Typography>
      </Box>
    </Box>
  );
}

export default IconCard;
