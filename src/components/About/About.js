import "./About.scss";
import React from "react";
import { AiOutlineDown } from "react-icons/ai";
const About = () => {
  return (
    <div className="about-container" id='About'>
      <div className="about-title-container">
        <p className="about-title-heading">New app on the block</p>
        <h1 className="about-title-sub-heading">
          Jevelin app will never again let you worry about your plants
        </h1>
        <button className="about-title-button">
          <AiOutlineDown className="about-title-button-icon" />
          Find out more
        </button>
      </div>
      <div className="about-image-container">
        <img src="https://jevelin.shufflehound.com/mobile-app-2/wp-content/uploads/sites/40/2019/11/phone-copy-6.png" alt="/" className="about-image" />
      </div>
    </div>
  );
};

export default About;
