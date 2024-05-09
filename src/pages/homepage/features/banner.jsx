import React from "react";
import Bannerimg from '../../../assets/bannerimg.png'
const Banner = () => {
  return (
    <div className="banner">
      <div className="page_width">
        <div className="banner_inner">
          <div className="content">
            <h2>up your skills to advance your career path</h2>
            {/* <img src={Bannerimg}  alt="" /> */}
          </div>
          <div className="banner_img">
            <div className="banner_img_bg">
                <img src={Bannerimg}  alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
