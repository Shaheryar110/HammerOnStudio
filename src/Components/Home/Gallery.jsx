import React, { useState } from "react";
import { Container, Box, Typography, Stack, Grid } from "@mui/material";
import Image from "next/image";
import responsive from "../../styles/responsive.module.css";
import styles from "../../styles/style.module.css";
import roof1 from "../../assets/images/galleryImg/1.webp";
import roof2 from "../../assets/images/galleryImg/2.webp";
import roof3 from "../../assets/images/galleryImg/3.webp";
import roof4 from "../../assets/images/galleryImg/4.webp";
import roof5 from "../../assets/images/galleryImg/5.webp";
import roof6 from "../../assets/images/galleryImg/6.webp";
import GalleryBox from "../Commons/GalleryBox";

function Gallery({ border }) {
  const style = {
    center: {
      justifyContent: "center",
      alignItems: "center",
    },
    margin: {
      marginY: border ? "0px" : "4rem",
      paddingX: "0px",
      marginX: "0px",
    },
    navItem: {
      fontSize: "1.2rem",
      fontWeight: 600,
      cursor: "pointer",
    },
    ComName: {
      position: "relative",
      textAlign: "left",
      animation: "text-appear 1.2s linear forwards",
      animationDelay: "0.7s",
      fontWeight: 800,
      fontSize: "1.5rem",
      color: "white",
      " :: before": {
        content: "' '",
        position: "absolute",
        backgroundColor: "rgb(238, 33, 43)",
        color: "#2871ae",
        width: "5px",
        height: "30px",
        left: "-8px",
      },
    },
    superText: {
      color: "white",
      fontSize: "1.1rem",
    },
    gridIamge: {
      position: "relative",
      margin: "2px",
    },
    galleryOverlay: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      height: "100%",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgb(0, 0, 0,0.3)",
      padding: "30px",
    },
    borders: {
      borderTop: border ? "8px solid #3772B0" : "none",
      borderLeft: border ? "1rem solid #3772B0" : "none",
      borderRight: border ? "1rem solid #3772B0" : "none",
      borderBottom: border ? "1rem solid #3772B0" : "none",
    },
  };

  const [activeStatus, setActiveStatus] = useState("All Project");
  const onChangeHandler = (status) => {
    setActiveStatus(status);
  };
  return (
    <>
      <Box sx={style.margin}>
        <Container sx={style.borders}>
          <Grid container sx={style.center}>
            <Grid
              item
              lg={12}
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: { lg: "60%", md: "100%" },
                }}
              >
                <ul className={styles.navTab}>
                  <li
                    onClick={() => onChangeHandler("All Project")}
                    className={activeStatus == "All Project" && styles.active}
                  >
                    <Typography sx={style.navItem}>All Project</Typography>
                  </li>
                  <li onClick={() => onChangeHandler("Factory")}>
                    {" "}
                    <Typography
                      className={activeStatus == "Factory" && styles.active}
                      sx={style.navItem}
                    >
                      Factory
                    </Typography>
                  </li>
                  <li onClick={() => onChangeHandler("Residential")}>
                    <Typography
                      className={activeStatus == "Residential" && styles.active}
                      sx={style.navItem}
                    >
                      Residential
                    </Typography>
                  </li>
                  <li onClick={() => onChangeHandler("Commercial")}>
                    <Typography
                      className={activeStatus == "Commercial" && styles.active}
                      sx={style.navItem}
                    >
                      Commercial
                    </Typography>
                  </li>
                  <li onClick={() => onChangeHandler("Interior")}>
                    <Typography
                      className={activeStatus == "Interior" && styles.active}
                      sx={style.navItem}
                    >
                      Interior
                    </Typography>
                  </li>
                </ul>
              </Box>
            </Grid>
          </Grid>
          {/* all project */}
          {activeStatus === "All Project" && (
            <Grid container sx={style.margin}>
              <Grid item lg={6} sm={12}>
                <Grid container>
                  <Grid item lg={6}>
                    <GalleryBox
                      src={roof1}
                      category="Factory,Residential"
                      service="Roof Construction"
                    />
                  </Grid>
                  <Grid item lg={6}>
                    <GalleryBox
                      src={roof2}
                      category="Factory,Residential"
                      service="Roof Construction"
                    />
                  </Grid>
                  <Grid item lg={12}>
                    <GalleryBox
                      src={roof6}
                      category="Factory,Residential"
                      service="Renovation Roof"
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item lg={6} sm={12}>
                <Grid container>
                  <Grid item lg={12}>
                    <GalleryBox
                      src={roof3}
                      category="Factory,Residential"
                      service="Modern Roofing"
                    />
                  </Grid>
                  <Grid item lg={6}>
                    <GalleryBox
                      src={roof4}
                      service="Classic Roofing"
                      category="Factory,Residential"
                    />
                  </Grid>
                  <Grid item lg={6}>
                    <GalleryBox
                      src={roof5}
                      service="Repair Roof"
                      category="Factory,Residential"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          )}
          {activeStatus === "Factory" && (
            <Grid container sx={style.margin}>
              <Grid item lg={6}>
                <Grid container>
                  <Grid item lg={6}>
                    <GalleryBox
                      src={roof1}
                      service="Roof Construction"
                      category="Factory,Residential"
                    />
                  </Grid>
                  <Grid item lg={6}>
                    <GalleryBox
                      src={roof2}
                      service="Roof Construction"
                      category="Factory,Residential"
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item lg={6}>
                <GalleryBox
                  src={roof6}
                  service="Renovation Roof"
                  category="Factory,Residential"
                />
              </Grid>
            </Grid>
          )}
          {activeStatus === "Residential" && (
            <Grid container sx={style.margin}>
              <Grid item lg={12}>
                <Grid container>
                  <Grid item lg={3}>
                    <GalleryBox
                      src={roof1}
                      service="Roof Construction"
                      category="Factory,Residential"
                    />
                  </Grid>
                  <Grid item lg={6}>
                    <GalleryBox
                      src={roof3}
                      service="Modern Roofing"
                      category="Factory,Residential"
                    />
                  </Grid>
                  <Grid item lg={3}>
                    <GalleryBox
                      src={roof4}
                      service="Roof Construction"
                      category="Factory,Residential"
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item lg={12}>
                <Grid container>
                  <Grid item lg={5}>
                    <GalleryBox
                      src={roof6}
                      service="Renovation Roof"
                      category="Factory,Residential"
                    />
                  </Grid>
                  <Grid item lg={3}>
                    <GalleryBox
                      src={roof5}
                      service="Repair Roof"
                      category="Factory,Residential"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          )}
          {activeStatus === "Commercial" && (
            <Grid container sx={style.margin}>
              <Grid item lg={9}>
                <Grid container>
                  <Grid item lg={4}>
                    <GalleryBox
                      src={roof1}
                      service="Roof Construction"
                      category="Factory,Residential"
                    />
                  </Grid>
                  <Grid item lg={8}>
                    <GalleryBox
                      src={roof3}
                      service="Modern Roofing"
                      category="Factory,Residential"
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item lg={6}>
                <GalleryBox
                  src={roof6}
                  service="Renovation Roof"
                  category="Factory,Residential"
                />
              </Grid>
            </Grid>
          )}
          {activeStatus === "Interior" && (
            <Grid container sx={style.margin}>
              <Grid item lg={6}>
                <Grid container>
                  <Grid item lg={6}>
                    <GalleryBox
                      src={roof4}
                      service="Classic Roofing"
                      category="Factory,Residential"
                    />
                  </Grid>
                  <Grid item lg={6}>
                    <GalleryBox
                      src={roof5}
                      category="Factory,Residential"
                      service="Repair Roof"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          )}
        </Container>
      </Box>
    </>
  );
}

export default Gallery;
