import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import shape34 from "../../assets/images/shape.webp";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import shape35 from "../../assets/images/shape35.webp";
// import shape34 from "../../assets/images/shape34.webp";
import shape36 from "../../assets/images/shape36.webp";
import styles from "../../styles/style.module.css";

function Testimonials() {
  const style = {
    main: {
      background: "rgb(255,255,255)",
      background: {
        lg: "linear-gradient(90deg, rgba(255,255,255,1) 51%, rgba(36,36,36,1) 51%)",
        sm: "white",
      },
      marginY: "7rem",
      position: "relative",
      zIndex: "2",
    },
    sliderCard: {
      padding: "1.5rem",
      width: "90%",
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
      display: { lg: "block", xs: "none" },
    },
    carBox1: {
      marginTop: "5rem",
      marginLeft: { lg: "10rem", xs: "2rem" },

      zIndex: "99",
    },
    h4: {
      color: { lg: "#fff", sm: "black" },
      fontSize: "14px",
      fontWeight: 700,
      marginBottom: "10px",
      letterSpacing: "1px",
      fontFamily: "Inter, sans-serif",
      position: "relative",
      paddingLeft: "30px",
      lineHeight: "21px",
      "&::before": {
        content: '""',
        height: "3px",
        width: "21px",
        backgroundColor: "#2871ae",
        position: "absolute",
        top: "9px",
        left: 0,
      },
    },
    h3: {
      fontFamily: "Inter, sans-serif",
      fontSize: "30px",
      lineHeight: "46px",
      fontWeight: 800,
      fontStyle: "normal",
      color: { lg: "#fff", sm: "black" },
      position: "relative",
      zIndex: "2",
    },
    imgBack: {
      position: "absolute",

      right: 0,
      top: "-2rem",
      height: "485px",
      display: { lg: "block", xs: "none" },
    },
  };
  const reviews = [
    " “We hired Hammer-On Studios to get our home’s flooring done. Their team is highly professional and has the right tools, and hired adequate techniques to get the job. We are extremely satisfied with their services and are soon going to call them for our home’s paint job.”",

    "“Our business had been looking for a contractor that can provide us with roofing services for quite a long time. One of our partners recommended us Hammer-On Studios and we are more than happy with the services they provided. Definitely going to work with them in the future.” ",

    "“The entire crew of Hammer-On Studios was amazing. They replaced all of our sliding doors and windows and added a slider where there was previously a door. From start to finish, they did their job perfectly. Overall the job turned out perfect. We love our new windows and sliding doors!” ",
  ];

  return (
    <>
      <Box sx={style.main}>
        <Box sx={style.imgBack}>
          <Image
            src={shape34}
            fill={false}
            style={{ width: "100%", height: "100%" }}
          />
        </Box>

        <Grid container>
          <Grid item lg={6}>
            <Box sx={style.carBox}>
              <Carousel
                autoPlay={true}
                showArrows={false}
                showIndicators={false}
                centerMode={true}
                centerSlidePercentage={55}
                showStatus={false}
                interval={2000}
                infiniteLoop={true}
                showThumbs={false}
                width="100%"
              >
                {reviews.map((data, index) => (
                  <Box sx={style.sliderCard} key={index}>
                    <Image
                      src={shape35}
                      width={100}
                      height={100}
                      style={{ width: "60px", height: "60px" }}
                    />
                    <Image
                      src={shape36}
                      width={100}
                      height={100}
                      style={{ width: "60px", height: "60px" }}
                    />

                    <Typography sx={style.content}>{data}</Typography>
                  </Box>
                ))}
              </Carousel>
            </Box>
          </Grid>
          <Grid item lg={6}>
            <Box sx={style.carBox1}>
              <Typography variant="h4" sx={style.h4}>
                OUR TESTIMONIAL
              </Typography>
              <Typography variant="h3" sx={style.h3}>
                What Our Clients Say About Us
              </Typography>
              <Typography
                sx={{
                  color: { lg: "white", sm: "black" },
                  width: "90%",
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
        <Box sx={{ display: { lg: "none", sm: "block" } }}>
          {reviews.map((data, index) => (
            <Box sx={style.sliderCard} key={index}>
              <Image
                src={shape35}
                width={100}
                height={100}
                style={{ width: "60px", height: "60px" }}
              />
              <Image
                src={shape36}
                width={100}
                height={100}
                style={{ width: "60px", height: "60px" }}
              />

              <Typography sx={style.content}>{data}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}

export default Testimonials;
