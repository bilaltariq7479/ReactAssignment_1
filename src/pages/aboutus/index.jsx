import React from "react";
import aboutimg1 from '../../assets/aboutimg1.jpg'
const Aboutus = () => {
  return (
    <div className="aboutus_page">
      <div className="page_width">
        <div className="banner_inner">
          <div className="about_content">
            <h3>About Us</h3>
            <p className="aboutpcontent">
              <span>WEEKEND UX </span>
              providing the best opportunities to the students around the glob.
            </p>
            <h4>
              Weekend UX, is a UI/UX Design Academy in Delhi involved in User
              Experience and User Interface Training and Consulting. It was
              started in 2023 and passionate towards User Interface Design/ User
              Experience Design, Human Computer Interaction Design. Humanoid is
              gushing towards competence to acquire knowledge and have a wide
              understanding towards the sphere through the foremost courses in
              the area of UI/UX Design, by strengthening up your skills, for
              your golden future
            </h4>
            <button>Join us</button>
          </div>
          <div className="about_imgs">
            <div className="about_img_bg">
                <div className="aboutimg1div"></div>
                <div className="aboutimg2div"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
