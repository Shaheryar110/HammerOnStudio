import { Box, Container, Typography } from "@mui/material";
import React from "react";

function PostContent({ posts, postHeading, postpara }) {
  return (
    <>
      <Box sx={{ width: "100%", height: "60vh", paddingY: "5rem" }}>
        <Container
          sx={{
            maxWidth: { lg: "1000px" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              fontWeight: 800,
              fontSize: "30px",
              opacity: 0.8,
            }}
          >
            {postHeading}
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              fontWeight: 500,
              fontSize: "18px",
              paddingTop: "12px",
            }}
          >
            {postpara}
          </Typography>
        </Container>
      </Box>
    </>
  );
}

export default PostContent;
