import { Box, Container, Typography } from "@mui/material";
import React from "react";

function PostContent({ posts, postHeading, postpara }) {
  return (
    <>
      <Box sx={{ width: "100%", height: "100%", paddingY: "5rem" }}>
        <Container sx={{ maxWidth: "1200px" }}>
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
