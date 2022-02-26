import React, { ReactNode, useEffect } from "react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import "../styles/globals.scss";
export const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="appStyles">
      <div className="layout">
        {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
        <nav>Nav and side nav here</nav>
        <div className="container">{children}</div>
        <footer>Footer here</footer>
      </div>
    </div>
  );
};

export default Layout;
