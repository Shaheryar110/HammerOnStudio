import { Typography } from "@mui/material";
import React from "react";

function HeadingH2({ text, align }) {
  const style = {
    styling: {
      fontWeight: "900",
      color: "#393738",
      textAlign: align || "left",
    },
  };
  return (
    <Typography variant="h3" sx={style.styling}>
      {text}
    </Typography>
  );
}

export default HeadingH2;
