import Header from "./header";
import Footer from "./footer";
import Content from "~/content";
import React from "react";
import { useEffect,useState } from "react";

const Layout = () => {
  const [show, setShow] = useState(false);
  const handleToggle = () => {
    setShow(!show);
  };
  return (
    <>
      <Header />
      <button onClick={handleToggle}>Show</button>
      {show && <Content />}
      <Footer />
    </>
  );
};

export default Layout;
