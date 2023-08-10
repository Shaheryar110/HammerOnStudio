import { Typography } from "@mui/material";
import React from "react";
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});
function HeadingH2({ text, align }) {
  const style = {
    styling: {
      fontWeight: "800",
      color: "#393738",
      textAlign: align || "left",
      fontSize: "36px",
      margin: "0px 0px 20px",
    },
  };
  return (
    <Typography variant="h3" sx={style.styling} className={inter.className}>
      {text}
    </Typography>
  );
}

export default HeadingH2;
