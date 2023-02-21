import "./Features.scss";
import React from "react";
import { BsBell } from "react-icons/bs";
import { BsCalendarDay } from "react-icons/bs";
const Features = () => {
  const enableFeatureAnimations = () => {
    document.getElementById("plant").style.visibility = "visible";
    document.getElementById("plant").style.animation = "slideToRight 1.8s";
    setTimeout(function () {
      document.getElementById("schedule").style.visibility = "visible";
      document.getElementById("schedule").style.animation =
        "slideToLeft 1.8s";
    }, 1000);
    setTimeout(function () {
      document.getElementById("verify").style.visibility = "visible";
      document.getElementById("verify").style.animation =
        "slideToRight 1.8s";
    }, 2000);
  };
  return (
    <div className="feature-container"
    id='Features'
    onMouseOver={() => {
      enableFeatureAnimations();
    }}>
      <div className="each-feature-container">
        <div className="each-feature-matter-container">
          <p className="each-feature-heading">More than 10k plants</p>
          <h1 className="each-feature-sub-heading">
            Endless plant library to choose from
          </h1>
          <p className="each-feature-matter">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            vulputate quam ut mi dictum, et euismod sapien condimentum.
          </p>
        </div>
        <div className="each-feature-image-container">
          <img
            src="https://jevelin.shufflehound.com/mobile-app-2/wp-content/uploads/sites/40/2019/11/phone-copy-4.png"
            alt="/"
            className="each-feature-image"
            id='plant'
          />
        </div>
      </div>
      <div className="each-feature-container reverse">
        <div className="each-feature-image-container"  id='schedule'>
          <img
            src="https://jevelin.shufflehound.com/mobile-app-2/wp-content/uploads/sites/40/2019/11/phone-copy-5.png"
            alt="/"
            className="each-feature-image"
           
          />
        </div>
        <div className="each-feature-matter-container">
          <p className="each-feature-heading">Advanced planner</p>
          <h1 className="each-feature-sub-heading">
            Schedule your plants needs
          </h1>
          <div className="each-feature-highlight-container">
            <BsBell className="highlight-bell-icon" />
            <p className="highlight-matter">
              Get notified when your plants cycles are starting
            </p>
          </div>
          <div className="each-feature-highlight-container">
            <BsCalendarDay className="highlight-calender-icon" />
            <p className="highlight-matter">
              Set separate reminders for different seasons
            </p>
          </div>
        </div>
      </div>
      <div className="each-feature-container">
        <div className="each-feature-matter-container">
          <p className="each-feature-heading">Never forget</p>
          <h1 className="each-feature-sub-heading">
            Get notified whenever you need to attend your plants{" "}
          </h1>
          <p className="each-feature-matter">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            vulputate quam ut mi dictum, et euismod sapien condimentum.
          </p>
        </div>
        <div className="each-feature-image-container">
          <img
            src="https://jevelin.shufflehound.com/mobile-app-2/wp-content/uploads/sites/40/2019/11/phone-copy-9.png"
            alt="/"
            className="each-feature-image"
            id='verify'
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
