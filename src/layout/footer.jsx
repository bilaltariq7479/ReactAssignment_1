import React from 'react';
import Logo from "../assets/logo.png";
const Footer = () => {
  return (
    <div className='page_width'>
      <footer>
        <div className="inner_footer">
            <div className="sub-inner-footer">
                <img src={Logo} alt="" />
                <p>Top learning experiences that create more talent in the world.</p>
            </div>
            <div className="sub-inner-footer">
                <p>Product</p>
            </div>
            <div className="sub-inner-footer"></div>
            <div className="sub-inner-footer"></div>
            <div className="sub-inner-footer"></div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;
