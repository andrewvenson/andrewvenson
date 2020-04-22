import React from "react";
import LeftArrowPic from "../images/left-arrow.png";

const LeftArrow = () => {
  const directions = {
    fontWeight: "lighter",
    color: "purple",
    margin: "10px",
    fontSize: "20px",
  };
  return (
    <span className="portfolio directional" style={directions}>
      <a href="/portfolio">
        {" "}
        <img src={LeftArrowPic} style={{ width: "20px", height: "20px" }} />
      </a>
    </span>
  );
};

export default LeftArrow;