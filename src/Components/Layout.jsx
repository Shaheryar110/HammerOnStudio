import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import HeaderTop from "./Header";
import NavBAr from "./NavBAr";
import { Box, Container, Typography } from "@mui/material";
import ReportIcon from "@mui/icons-material/Report";

// export async function getStaticProps() {
//   // Fetch data from external API
//   const response = await fetch(
//     "https://backend.hammeronstudios.com:3000/checkIp"
//   );
//   const jsonData = await response.json();
//   console.log(jsonData, "jsp");
//   // Pass data to the page via props
//   return { props: { jsonData } };
// }
function Layout({ children }) {
  const [data, setData] = useState(true);
  const [loading, SetLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      SetLoading(true);
      try {
        const response = await fetch(
          "https://backend.hammeronstudios.com:3000/checkIp"
        );
        const jsonData = await response.json();
        setData(jsonData.show);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        SetLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      {loading ? (
        <div></div>
      ) : data ? (
        <>
          <div>
            <HeaderTop />
            <NavBAr />
          </div>
          {children}
          <Footer />
        </>
      ) : (
        <>
          <Box sx={{ width: "100%", height: "100%", paddingY: "4rem" }}>
            <Container sx={{ maxWidth: { lg: "1450px" } }}>
              <ReportIcon sx={{ fontSize: 150 }} />
              <Typography variant="h2" sx={{ marginY: "1rem" }}>
                This site can’t be reached
              </Typography>
              <Typography>
                This Site Can't be open execpt USA try from different ip
              </Typography>
            </Container>
          </Box>
        </>
      )}
    </>
  );
}

export default Layout;
