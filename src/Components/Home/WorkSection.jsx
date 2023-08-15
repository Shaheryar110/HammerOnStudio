import { Container, Box, Typography, Stack, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import responsive from "../../styles/responsive.module.css";
import styles from "../../styles/style.module.css";
import sbg2 from "../../assets/images/sbg2.png";
import worker from "../../assets/images/worker01.webp";
import { motion, easeIn } from "framer-motion";
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});
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
      fontWeight: 900,
      margin: "0px 0px 20px",
      fontSize: "36px",
      lineHeight: "1.3em",
      fontStyle: "normal",
      color: "#393738",
    },
    head1: {
      fontWeight: 900,
      margin: "0px 0px 20px",
      fontSize: "33px",
      lineHeight: "1.3em",
      fontStyle: "normal",
      color: "#393738",
    },
    p: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "1.3em",

      margin: "0px 0px 20px",
      color: " #7A7A7A",
    },
  };
  return (
    <>
      <Stack sx={style.workSec}>
        <Container sx={responsive.container}>
          <Grid
            container
            columnSpacing={4}
            my={5}
            sx={{ justifyContent: "space-between" }}
          >
            <Grid item lg={5}>
              <motion.div
                initial={{ x: -200, opacity: 0 }} // Initial position outside the left side of the screen with opacity 0
                animate={{ x: 0, opacity: 1 }} // Final position (its actual position) with opacity 1
                transition={{ duration: 1, type: "easeIn", delay: 1 }} // Animation duration, easing, and delay
              >
                <Box className={styles.workTag}>
                  <Image
                    src={worker}
                    alt="oops"
                    fill={false}
                    style={{ height: "100%", width: "100%" }}
                  />
                </Box>
              </motion.div>
            </Grid>
            <Grid item lg={6}>
              <Box sx={style.article}>
                <Typography
                  variant="h3"
                  sx={style.head1}
                  className={inter.className}
                >
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
                <Typography
                  variant="h3"
                  sx={style.head}
                  className={inter.className}
                >
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
          <Grid
            container
            columnSpacing={4}
            sx={{ justifyContent: "space-between" }}
          >
            <Grid item lg={6}>
              <Box sx={style.article}>
                <Typography
                  variant="h3"
                  sx={style.head}
                  className={inter.className}
                >
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
                <Typography
                  variant="h3"
                  sx={style.head}
                  className={inter.className}
                >
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
