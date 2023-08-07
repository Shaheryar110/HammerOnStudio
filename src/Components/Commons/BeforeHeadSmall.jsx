import { Typography } from "@mui/material";
import React from "react";
import styles from "../../styles/style.module.css";

function BeforeHeadSmall({ text, size, color }) {
  const style = {
    h4: {
      color: color || "black",
      fontSize: size || "1rem",
      fontWeight: 700,
      marginBottom: "10px",
      letterSpacing: "1px",

      position: "relative",
      paddingLeft: "30px",
      lineHeight: "21px",
      "::before": {
        content: "' '",
        height: "3px",
        width: "21px",
        backgroundColor: "#2871ae",
        position: "absolute",
        top: "9px",
        left: 0,
      },
    },
  };
  return (
    <Typography variant="h4" sx={style.h4}>
      {text}
    </Typography>
  );
}

export default BeforeHeadSmall;
