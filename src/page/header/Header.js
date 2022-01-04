import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
};

export default Header;
