import React, { useState } from "react";
import { Container, Box, Typography, Stack, Grid } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";

function GalleryBox({ src, category, service, priority, alt }) {
  const style = {
    center: {
      justifyContent: "center",
      alignItems: "center",
    },
    margin: {
      marginY: "4rem",
    },
    navItem: {
      fontSize: "1.2rem",
      fontWeight: 600,
    },
    ComName: {
      position: "relative",
      textAlign: "left",
      animation: "text-appear 1.2s linear forwards",
      animationDelay: "0.7s",
      fontWeight: 800,
      fontSize: "1.5rem",
      color: "white",
      marginBottom: "1rem",
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
      marginY: "1rem",
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
      alignItems: "flex-end",

      backgroundColor: "rgb(0, 0, 0,0.5)",
      padding: "30px",
    },
  };
  return (
    <motion.div
      initial={{ opacity: 0, transform: "scale(0.8)" }}
      animate={{ opacity: 1, transform: "scale(1)" }}
      transition={{ duration: 0.5 }}
    >
      <Box sx={style.gridIamge}>
        <Image
          src={src}
          height={300}
          width={300}
          style={{ width: "100%", height: "auto" }}
          alt={alt}
          priority={priority ? priority : false}
        />
        <Box sx={style.galleryOverlay}>
          <Box>
            <Typography sx={style.superText}>{category}</Typography>
            <Typography variant="h3" sx={style.ComName}>
              {service}
            </Typography>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
}

export default GalleryBox;
