import { Container, Box, Typography, Stack, Grid } from "@mui/material";
import React from "react";
import responsive from "../../styles/responsive.module.css";
import styles from "../../styles/style.module.css";
import img01 from "../../assets/images/img01.jpg";
import bgIcon from "../../assets/images/bgicon.png";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";

function ReadyToGetCard() {
  const style = {
    readyCard: {
      paddingY: "6rem",
    },
    card: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
    artic: {
      background: `url(${img01.src})`,
      padding: 0,
      backgroundPosition: "right",
      backgroundSize: "50%",
      backgroundColor: "#2871ae",
      borderRadius: "10px",
      position: "relative",
      zIndex: 2,
      backgroundRepeat: "no-repeat",
      "::before": {
        zIndex: 1,
        content: "''",
        background: `url(${bgIcon.src})`,
        width: "300px",
        height: "300px",
        position: "absolute",
        left: "135px",
        right: "40px",
        bottom: "12px",
        top: 0,
        backgroundRepeat: "no-repeat",
      },
      "::after": {
        content: "''",
        clipPath: "polygon(0% 0%, 75% 0%, 8% 100%, 0% 100%)",
        backgroundColor: "#2871ae",
        position: "absolute",
        width: "116px",
        height: "293px",
        left: "113px",
        right: 0,
        margin: "0 auto",
        bottom: 0,
        zIndex: "-1",
      },
    },
  };
  return (
    <>
      <Stack sx={style.readyCard}>
        <Container sx={responsive.container}>
          <Grid container sx={style.card}>
            <Grid item lg={9}>
              <Box sx={style.artic}>
                <Box className={styles.mediass}>
                  <span className={styles.span1}>
                    <QuestionAnswerIcon />
                  </span>
                  <div className={styles.mediaBod}>
                    <Typography variant="h4" className={styles.cardText}>
                      Ready to get your facility renovation work done from
                      Hammer-On Studios?
                    </Typography>
                    <Typography className={styles.cardContact}>
                      Connect with us at (845) 837-2616 now!
                    </Typography>
                  </div>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Stack>
    </>
  );
}

export default ReadyToGetCard;
