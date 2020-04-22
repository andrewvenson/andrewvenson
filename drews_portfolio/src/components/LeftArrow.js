import React from "react";
import LeftArrowPic from "../images/left-arrow.png";
const directions = {
  fontWeight: "lighter",
  color: "purple",
  margin: "10px",
  fontSize: "20px",
};

const LeftArrow = () => {
  return (
    <span className="portfolio" style={directions}>
      <a href="/portfolio">
        {" "}
        <img src={LeftArrowPic} style={{ width: "20px", height: "20px" }} />
      </a>
    </span>
  );
};

export default LeftArrow;
