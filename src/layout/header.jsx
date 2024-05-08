import React from "react";
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="page_width">
      <header>
        <div className="logo">
            <img src={Logo} alt="" />
            <input type="text" placeholder="" />
        </div>
        <div className="nav_links">
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Courses</li>
            <li>Contact us</li>
            <li>Faq's</li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
