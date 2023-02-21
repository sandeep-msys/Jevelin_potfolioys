import "./BottomFixNav.scss";
import React, { useState, useEffect } from "react";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
const BottomFixNav = () => {
  const onClick = () => {
    window.scrollTo(0, 0);
  };
  const [yOffSet, setYoffSet] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        if (window.pageYOffset > 50) {
          setYoffSet(true);
        } else {
          setYoffSet(false);
        }
      },
      []
    );
  });
  return (
    <FaRegArrowAltCircleUp
      onClick={onClick}
      className={yOffSet === true ? "visible" : "non-visible"}
    />
  );
};

export default BottomFixNav;
