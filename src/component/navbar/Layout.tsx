import React, { ReactNode } from "react";
import Navbar from "@clinic/component/navbar/Navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main style={{ padding: "20px" }}>{children}</main>
    </>
  );
};

export default Layout;
