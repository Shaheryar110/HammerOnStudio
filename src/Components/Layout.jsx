import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import HeaderTop from "./Header";
import NavBAr from "./NavBAr";

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

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://backend.hammeronstudios.com:3000/checkIp"
  //       );
  //       const jsonData = await response.json();
  //       setData(jsonData.show);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  return (
    <>
      {data ? (
        <>
          <div>
            <HeaderTop />
            <NavBAr />
          </div>
          {children}
          <Footer />
        </>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default Layout;
