import React from "react";
import RightArrowPic from "../images/right-arrow.png";

const RightArrow = () => {
  const directions = {
    fontWeight: "lighter",
    color: "purple",
    margin: "10px",
    fontSize: "20px",
  };

  return (
    <span className="portfolio directional" style={directions}>
      <a href="/about">
        {" "}
        <img src={RightArrowPic} style={{ width: "20px", height: "20px" }} />
      </a>
    </span>
  );
};

export default RightArrow;
