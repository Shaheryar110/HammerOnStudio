import React from "react";
import Footer from "./Footer";
import HeaderTop from "./Header";
import NavBAr from "./NavBAr";

function Layout({ children }) {
  return (
    <>
      <div>
        <HeaderTop />
        <NavBAr />
      </div>
      {children}
      <Footer />
    </>
  );
}

export default Layout;
