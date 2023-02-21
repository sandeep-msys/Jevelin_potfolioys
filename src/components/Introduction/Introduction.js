import "./Introduction.scss";
import React from "react";
import { RiStarSFill } from "react-icons/ri";
import { BsFillPlayCircleFill } from "react-icons/bs";
const Introduction = () => {
    // window.onscroll = function myFunction() {  
    //     var scrolltotop = document.scrollingElement.scrollTop;
    //     var target = document.getElementById("main");
    //     var xvalue = 'center';
    //     var factor = 0.5;
    //     var yvalue = scrolltotop * factor;
    //     target.style.backgroundPosition = xvalue + " " + yvalue + "px";
    //   }
  return (
    <div className="introduction-container">
      <div className="introduction-title-container">
        <p className="introduction-heading">Features</p>
        <h1 className="introduction-sub-heading">
          Watch our quick introduction video
        </h1>
        <p className="introduction-matter">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          vulputate quam ut mi dictum, et euismod sapien condimentum. Etiam a
          ante at nunc mattis sagittis ut ac leo. Etiam turpis augue, laoreet et
          velit vitae, pulvinar rhoncus massa. Curabitur efficitur commodo
          euismod.
        </p>
      </div>
      <div className="introduction-image-container" id='main'>
        <div className="introduction-image-card-container">
          <img
            src="https://jevelin.shufflehound.com/mobile-app-2/wp-content/uploads/sites/40/2019/11/ali-pazani-pknySeRayRw-unsplash3.jpg"
            alt="/"
            className="introduction-card-avatar"
          />
          <p className="introduction-card-name">Jane Doe</p>
          <p className="introduction-card-matter">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            vulputate quam ut mi dictum, et euismod sapien condimentum. Etiam a
            ante at nunc mattis
          </p>
          <div className="introduction-card-stars-container">
            <RiStarSFill className="introduction-star" />
            <RiStarSFill className="introduction-star" />
            <RiStarSFill className="introduction-star" />
            <RiStarSFill className="introduction-star" />
            <RiStarSFill className="introduction-star" />
          </div>
        </div>
        <BsFillPlayCircleFill className="introduction-play-button" />
      </div>
    </div>
  );
};

export default Introduction;
