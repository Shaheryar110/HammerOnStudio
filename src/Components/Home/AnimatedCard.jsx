import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import TerrainIcon from "@mui/icons-material/Terrain";
import HouseIcon from "@mui/icons-material/House";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function AnimatedCard() {
  const style = {
    mainContainer: {
      marginY: "1rem",
    },
    card: {
      width: "95%",
      backgroundColor: "#2871ae",
      color: "white",
      padding: "2rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "1rem",

      " : hover": {
        color: "#2871ae",
        backgroundColor: "white",
        borderTop: "6px solid #2871ae",
        transition: "all ease 0.5s",
      },
    },

    cardHeading: {
      fontSize: "70px",
      marginBottom: "18px",
      fontWeight: 700,
      textAlign: "center",
    },
    content: {
      fontSize: "20px",
      textTransform: "uppercase",
      fontWeight: 500,

      textAlign: "center",
    },
    icon: {
      fontSize: "80px",
      marginY: "1rem",
    },
    icon1: {
      fontSize: "30px",
      marginY: "0.5rem",
    },
  };
  return (
    <>
      <Box sx={style.mainContainer}>
        <Grid container>
          <Grid item lg={3}>
            <Box sx={style.card}>
              <ViewInArIcon sx={style.icon} />
              <Typography variant="h2" sx={style.cardHeading}>
                3000 +
              </Typography>
              <Typography sx={style.content}>
                SUCCESSFULLY COMPLETED PROJECTS
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={3} sx={{ alignSelf: "center" }}>
            <Box sx={style.card}>
              <ContentPasteIcon sx={style.icon} />
              <Typography variant="h2" sx={style.cardHeading}>
                255 +
              </Typography>
              <Typography sx={style.content}>PROFESSIONAL EXPERTS</Typography>
            </Box>
          </Grid>
          <Grid item lg={3} sx={{ alignSelf: "center" }}>
            <Box sx={style.card}>
              <TerrainIcon sx={style.icon} />
              <FiberManualRecordIcon sx={style.icon1} />
              <Typography variant="h2" sx={style.cardHeading}>
                2500 +
              </Typography>
              <Typography sx={style.content}>HAPPY CLIENTS</Typography>
            </Box>
          </Grid>
          <Grid item lg={3} sx={{ alignSelf: "center" }}>
            <Box sx={style.card}>
              <HouseIcon sx={style.icon} />
              <Typography variant="h2" sx={style.cardHeading}>
                5000 +
              </Typography>
              <Typography sx={style.content}>HOURS WORKED</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default AnimatedCard;
