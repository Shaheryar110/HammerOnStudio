import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import shape34 from "../../assets/images/shape34.webp";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import shape35 from "../../assets/images/shape35.png";
// import shape34 from "../../assets/images/shape34.webp";
import shape36 from "../../assets/images/shape36.png";
import styles from "../../styles/style.module.css";

function Testimonials() {
  const style = {
    main: {
      //   backgroundImage: `url(${shape34.src})`,
      //   backgroundPosition: "top right",
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "auto",
      //   height: "100%",
      background: "rgb(255,255,255)",
      background:
        "linear-gradient(90deg, rgba(255,255,255,1) 51%, rgba(36,36,36,1) 51%)",
      marginY: "3rem",
      // " :: before": {
      //   content: "' '",
      //   backgroundImage: `url(${shape34.src})`,
      //   backgroundPosition: "top right",
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "auto",
      //   position: "absolute",
      //   left: "1100px",
      //   right: 0,
      //   top: "7200px",
      //   bottom: 0,
      //   width: "778px",
      //   height: "300px",
      // },
    },
    sliderCard: {
      padding: "1.5rem",
      width: "450px",
      height: "300px",
      boxShadow: "2px 4px 13px 3px rgba(0,0,0,0.3)",
      backgroundColor: "white",
      marginX: "2rem",
      marginY: "1rem",
    },
    content: {
      color: "grey",
      fontSize: "1.1rem",
      marginTop: "1rem",
    },
    iconAligns: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
    },
    carBox: {
      marginTop: "4rem",
    },
    carBox1: {
      marginTop: "5rem",
      marginLeft: "1rem",

      zIndex: "99",
    },
  };

  return (
    <>
      <Box sx={style.main}>
        <Grid container>
          <Grid item lg={7}>
            <Box sx={style.carBox}>
              <Carousel
                autoPlay={true}
                showArrows={false}
                showIndicators={false}
                centerMode={true}
                centerSlidePercentage={45}
                showStatus={false}
              >
                <Box sx={style.sliderCard}>
                  <Image
                    src={shape35}
                    style={{ width: "60px", height: "60px" }}
                  />
                  <Image
                    src={shape36}
                    style={{ width: "60px", height: "60px" }}
                  />

                  <Typography sx={style.content}>
                    “Our business had been looking for a contractor that can
                    provide us with roofing services for quite a long time. One
                    of our partners recommended us Hammer-On Studios and we are
                    more than happy with the services they provided. Definitely
                    going to work with them in the future.”{" "}
                  </Typography>
                </Box>
                <Box sx={style.sliderCard}>
                  <Image
                    src={shape35}
                    style={{ width: "60px", height: "60px" }}
                  />
                  <Image
                    src={shape36}
                    style={{ width: "60px", height: "60px" }}
                  />
                  <Typography sx={style.content}>
                    “Our business had been looking for a contractor that can
                    provide us with roofing services for quite a long time. One
                    of our partners recommended us Hammer-On Studios and we are
                    more than happy with the services they provided. Definitely
                    going to work with them in the future.”{" "}
                  </Typography>
                </Box>
                <Box sx={style.sliderCard}>
                  <Image
                    src={shape35}
                    style={{ width: "60px", height: "60px" }}
                  />
                  <Image
                    src={shape36}
                    style={{ width: "60px", height: "60px" }}
                  />
                  <Typography sx={style.content}>
                    “Our business had been looking for a contractor that can
                    provide us with roofing services for quite a long time. One
                    of our partners recommended us Hammer-On Studios and we are
                    more than happy with the services they provided. Definitely
                    going to work with them in the future.”{" "}
                  </Typography>
                </Box>
                <Box sx={style.sliderCard}>
                  <Image
                    src={shape35}
                    style={{ width: "60px", height: "60px" }}
                  />
                  <Image
                    src={shape36}
                    style={{ width: "60px", height: "60px" }}
                  />
                  <Typography sx={style.content}>
                    “Our business had been looking for a contractor that can
                    provide us with roofing services for quite a long time. One
                    of our partners recommended us Hammer-On Studios and we are
                    more than happy with the services they provided. Definitely
                    going to work with them in the future.”{" "}
                  </Typography>
                </Box>
              </Carousel>
            </Box>
          </Grid>
          <Grid item lg={5}>
            <Box sx={style.carBox1}>
              <Typography variant="h4" className={styles.h4}>
                OUR TESTIMONIAL
              </Typography>
              <Typography
                variant="h3"
                className={styles.h3}
                sx={{ position: "relative", zIndex: "2" }}
              >
                What Our Clients Say About Us
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  width: "70%",
                  marginY: "1rem",
                  position: "relative",
                  zIndex: "2",
                }}
              >
                We consider our renovation projects not just a job; it’s our
                opportunity to bring a lasting imperative change to clients’
                lives. These reviews of our corporate and homeowners warm our
                hearts as a team and spur us on to keep doing what we do the
                best.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Testimonials;
