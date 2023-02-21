import "./Footer.scss";
import React from "react";
import { GrLinkedinOption } from "react-icons/gr";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
const Footer = () => {
  let aboutData = ["Vision", "Team", "Reviews"];
  let services = ["Financing", "Accounting", "Something"];
  return (
    <div className="footer-container">
      <div className="footer-title-container">
        <img src="https://jevelin.shufflehound.com/mobile-app-2/wp-content/uploads/sites/40/2019/11/Jevelin_logo_dark-1.png" alt="/" className="footer-title-image" />
        <p className="footer-title-matter">
          © 2020 <spam className="footer-highlight"> Jevelin </spam>
          All Rights Reserved.
        </p>
        <div className="footer-social-container">
          <FiFacebook className="footer-social-icon" />
          <AiOutlineInstagram className="footer-social-icon" />
          <GrLinkedinOption className="footer-social-icon" />
        </div>
      </div>

      <div className="footer-service-container">
        <p className="footer-service-title">Services</p>
        {services.map((item) => {
          return <p className="each-footer-service">{item}</p>;
        })}
      </div>
      <div className="footer-service-container">
        <p className="footer-service-title">About Us</p>
        {aboutData.map((item) => {
          return <p className="each-footer-service">{item}</p>;
        })}
      </div>

      <div className="footer-contact-container">
        <p className="footer-contact-title">
            Contact
        </p>
        <p className="each-footer-contact-address">
        jevelin@emailname.com
        </p>
        <p className="each-footer-contact-address">
        +731 442 522 96
        </p>
        <p className="each-footer-contact-address">
        Mon.-Fr. 9AM-5PM
        </p>
      </div>
    </div>
  );
};

export default Footer;
