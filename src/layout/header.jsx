import React from "react";
import Logo from "../assets/logo.png";
import {Link} from 'react-router-dom'
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
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about_us">About Us</Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
