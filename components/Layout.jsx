import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex-1 max-w-7xl mx-auto">{children}</div>
      <Footer />
    </div>
  ); 
};

export default Layout;
