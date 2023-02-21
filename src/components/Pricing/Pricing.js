import "./Pricing.scss";
import React from "react";
const basicData = [
  "Unlimited plant library",
  "Calendar",
  "Schedule alerts",
  "Up to 10 plants",
  "-",
];
const permiumData = [
  "Unlimited plant library",
  "Calendar",
  "Schedule alerts",
  "Up to 10 plants",
  "20GB gallery",
];

const Pricing = () => {
    const enablePricingAnimations = () => {
        document.getElementById("basicCard").style.visibility = "visible";
        document.getElementById("basicCard").style.animation = "blurAnimate 1.8s";
        setTimeout(function () {
          document.getElementById("premiumCard").style.visibility = "visible";
          document.getElementById("premiumCard").style.animation =
            "blurAnimate 1.8s";
        }, 1000);
      };
  return (
    <div className="pricing-container"
    onMouseOver={() => {
        enablePricingAnimations();
      }}
      id='Pricing'>
      <div className="pricing-title-container">
        <p className="pricing-heading">Pricing</p>
        <h1 className="pricing-sub-heading">
          Choose what suits your needs the best
        </h1>
      </div>
      <div className="pricing-cards-container">
        <div className="each-pricing-card-container" id='basicCard'>
          <p className="each-pricing-heading">Basic plan</p>
          <h1 className="each-pricing-sub-heading">Free</h1>
          <p className="each-pricing-time-period">/monthly</p>
          <button className="each-pricing-button">Get Started</button>
          {basicData.map((item) => {
            return <p className="pricing-offer">{item}</p>;
          })}
        </div>
        <div className="each-pricing-card-container" id='premiumCard'>
          <p className="each-pricing-heading ">Premium plan</p>
          <h1 className="each-pricing-sub-heading highlight-heading">$10</h1>
          <p className="each-pricing-time-period">/monthly</p>
          <button className="each-pricing-button highlight-button">Get Started</button>
          {permiumData.map((item) => {
            return <p className="pricing-offer">{item}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
