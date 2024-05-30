import React from "react";
import aboutimg1 from "../../assets/aboutimg1.jpg";
import aboutimg3 from "../../assets/aboutimg3.jpg";
import { FaLongArrowAltRight, FaPencilAlt } from "react-icons/fa";
import BenifitesThumb from "./BenifitesThumb";
const Aboutus = () => {
  return (
    <>
      <div className="aboutus_page">
        <div className="page_width">
          <div className="banner_inner">
            <div className="about_content">
              <h3>About Us</h3>
              <p className="aboutpcontent">
                <span>WEEKEND UX </span>
                providing the best opportunities to the students around the
                glob.
              </p>
              <h4>
                Weekend UX, is a UI/UX Design Academy in Delhi involved in User
                Experience and User Interface Training and Consulting. It was
                started in 2023 and passionate towards User Interface Design/
                User Experience Design, Human Computer Interaction Design.
                Humanoid is gushing towards competence to acquire knowledge and
                have a wide understanding towards the sphere through the
                foremost courses in the area of UI/UX Design, by strengthening
                up your skills, for your golden future
              </h4>
              <button>
                Join us <FaLongArrowAltRight />
              </button>
            </div>
            <div className="about_imgs">
              <div className="about_img_bg">
                <div className="aboutimg1div">
                  <img src={aboutimg1} alt="" />
                </div>
                <div className="aboutimg2div">
                  <img src={aboutimg1} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="banner_inner">
            <div className="about_content">
              <div className="img-bg2">
                <img src={aboutimg3} alt="" />
              </div>
            </div>
            <div className="about_imgs">
              <div className="about_2div">
                <p className="about_2div_p">Features</p>
                <h2>
                  We are always working to provide you best of the features in
                  all aspects.
                </h2>
                <br />
                <p>
                  At WEEKENDUX the chief determination is to clear the minds of
                  our students about their goals, while making them consistent
                  in their ambitions and pushing them to be confident for their
                  journey towards the course of time.
                </p>
                <br />
                <p>
                  You will find every little thing on the internet in just a
                  click of hand, but here we admire that without knowledge and
                  practice the internet may even also fail you in your life.
                </p>
                <br />
                <br />
                <button>
                  Learn More <FaLongArrowAltRight />{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="aboutbenifitsdiv">
            <p>Our Benifits</p>
            <div className="benifitsinner">
              <h1>
                By Joining WEEKENS UX Platform, One Can Avail a Lot Of Benefits.
              </h1>
            </div>
          </div>
          <div className="benifitsdiv">
            <BenifitesThumb
              thumbno="01"
              title="Standardization"
              description="When working in a global workplace, it’s often difficult to
                gauge learners’ training experiences, which are ... Read More"
            />
            <BenifitesThumb
              thumbno="02"
              title="Standardization"
              description="When working in a global workplace, it’s often difficult to
                gauge learners’ training experiences, which are ... Read More"
            />
            <BenifitesThumb
              thumbno="01"
              title="Standardization"
              description="When working in a global workplace, it’s often difficult to
                gauge learners’ training experiences, which are ... Read More"
            />
            <BenifitesThumb
              thumbno="01"
              title="Standardization"
              description="When working in a global workplace, it’s often difficult to
                gauge learners’ training experiences, which are ... Read More"
            />
            <BenifitesThumb
              thumbno="01"
              title="Standardization"
              description="When working in a global workplace, it’s often difficult to
                gauge learners’ training experiences, which are ... Read More"
            />
            <BenifitesThumb
              thumbno="01"
              title="Standardization"
              description="When working in a global workplace, it’s often difficult to
                gauge learners’ training experiences, which are ... Read More"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
