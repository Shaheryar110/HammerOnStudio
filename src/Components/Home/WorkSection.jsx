import { Container, Box, Typography, Stack, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import responsive from "../../styles/responsive.module.css";
import styles from "../../styles/style.module.css";
import sbg2 from "../../assets/images/sbg2.png";
import worker from "../../assets/images/worker01.webp";

function WorkSection() {
  const style = {
    workSec: {
      backgroundColor: "#ecf0f3",
      backgroundImage: `url(${sbg2.src})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      padding: "6rem 0",
      position: "relative",
      zIndex: "-1",
    },
    article: {
      // marginTop: "35px",
    },
    head: {
      fontWeight: 700,

      fontSize: "36px",
      lineHeight: "46px",
      fontStyle: "normal",
      color: "black",
    },
    p: {
      fontSize: "17px",
      fontWeight: 400,
      lineHeight: "28px",
      lineHeight: 1.7,

      margin: "10px 0",
      color: " #7A7A7A",
    },
  };
  return (
    <>
      <Stack sx={style.workSec}>
        <Container sx={responsive.container}>
          <Grid container columnSpacing={2} my={5}>
            <Grid item lg={6}>
              <Box className={styles.workTag}>
                <Image
                  src={worker}
                  alt="oops"
                  style={{ height: "100%", width: "100%" }}
                />
              </Box>
            </Grid>
            <Grid item lg={6}>
              <Box sx={style.article}>
                <Typography variant="h3" sx={style.head}>
                  Why Choose Hammer-On Studios
                </Typography>
                <Typography sx={style.p}>
                  We cater to all your renovation and remodeling needs, but if
                  you are looking for competent basement remodeling contractors?
                  Hammer-On Studios is the right choice for your next facility
                  repair and renovation project. Whether you require residential
                  renovation or commercial remodeling, our industry experience
                  and expertise make us our clients’ perfect partners to help
                  turn their vision into an enticing reality and success.
                </Typography>
                <Typography variant="h3" sx={style.head}>
                  Our Attention To Detail
                </Typography>
                <Typography sx={style.p}>
                  We cater to all your renovation and remodeling needs, but if
                  you are looking for competent basement remodeling contractors?
                  Hammer-On Studios is the right choice for your next facility
                  repair and renovation project. Whether you require residential
                  renovation or commercial remodeling, our industry experience
                  and expertise make us our clients’ perfect partners to help
                  turn their vision into an enticing reality and success.
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid container columnSpacing={2}>
            <Grid item lg={6}>
              <Box sx={style.article}>
                <Typography variant="h3" sx={style.head}>
                  Dedicated Renovation Process
                </Typography>
                <Typography sx={style.p}>
                  Using our Design-Plan-Construct process, the Hammer-On Studios
                  team ensures that the final look is everything the homeowner
                  has envisioned and that the process of getting there is as
                  easy as possible. Using our DPC process, Hammer-On Studios
                  streamlines the entire renovation project and maximizes the
                  investment of our clients
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={6}>
              <Box sx={style.article}>
                <Typography variant="h3" sx={style.head}>
                  Workmanship Guarantee
                </Typography>
                <Typography sx={style.p}>
                  Not only do we apply stringent attention to detail with our
                  building work, but to all projects. Hammer-On Studios
                  dedication to detail extends not only to our building work but
                  to all of our projects. As a part of our internal processes,
                  we conduct regular quality checks at each stage of the
                  project, so you can be assured the work is being done
                  according to high quality and regulatory standards
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Stack>
    </>
  );
}

export default WorkSection;
