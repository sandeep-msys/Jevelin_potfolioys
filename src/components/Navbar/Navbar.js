import "./Navbar.scss";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { MdGridView } from "react-icons/md";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";
import { SlMagnifier } from "react-icons/sl";
const Navbar = () => {
  const [showHiddenNav, setShowHiddenNav] = useState(false);
  const enableHiddenNavbar = () => {
    setShowHiddenNav(!showHiddenNav);
  };

  return (
    <div className="navbar-container">
      <div className="navbar-title-container">
        <img
          src="https://jevelin.shufflehound.com/mobile-app-2/wp-content/uploads/sites/40/2019/11/Jevelin_logo_dark-1.png"
          alt="/"
          className="navbar-title-image"
        />
      </div>
      {showHiddenNav ? (
        <RxCross1
          className="cross-icon"
          onClick={() => {
            enableHiddenNavbar();
          }}
        />
      ) : null}
      {showHiddenNav ? (
          <div className="hidden-nav">

            <a href="#About" className="hidden-menu-option">
              About
            </a>
            <a href="#Features" className="hidden-menu-option">
            Features
            </a>
            <a href="#Pricing" className="hidden-menu-option">
              Pricing
            </a>
            <a href="#Contact" className="hidden-menu-option">
              Contact
            </a>
            <button className="navbar-menu-button">Purchase</button>
            <p className="navbar-search">
              Search here..
              <SlMagnifier className="hidden-magnifier" />
            </p>
            <div className="hidden-social-icons-container">
              <FiFacebook className="hidden-social-icon" />
              <AiOutlineInstagram className="hidden-social-icon" />
              <CiTwitter className="hidden-social-icon" />
            </div>
          </div>
        ) : (
        <RxHamburgerMenu
          className="navbar-hamburger-icon"
          onClick={() => {
            enableHiddenNavbar();
          }}
        />
      )}
      <div className="navbar-menu-container">
        <div className="navbar-menu-options-container">
          <a href="#About" className="each-menu-option">
            About
          </a>
          <a href="#Features" className="each-menu-option">
            Features
          </a>
          <a href="#Pricing" className="each-menu-option">
            Pricing
          </a>
          <a href="#Contact" className="each-menu-option">
            Contact
          </a>
        </div>
        <button className="green-button">
          <MdGridView className="button-icon" />
          Get App
        </button>
      </div>
    </div>
  );
};

export default Navbar;
