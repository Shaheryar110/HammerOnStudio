import React from "react";
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
    </>
  );
}

export default Layout;
