import React from "react";
import InputText from "../../component/InputText";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">
            <img src="" alt="logo" />
          </a>
        </div>
        <div className="navbar-menu">
          <ul>
            <li>
              <a href="#" className="navbar-link">Home</a>
            </li>
            <li>
              <a href="#" className="navbar-link">Product</a>
            </li>
            <li>
              <a href="#" className="navbar-link">Pricing</a>
            </li>
            <li>
              <a href="#" className="navbar-link">About</a>
            </li>
            <li>
              <a href="#" className="navbar-link">Contact</a>
            </li>
          </ul>
              <InputText />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
