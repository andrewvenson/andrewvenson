import React from "react";
import RightArrowPic from "../images/right-arrow.png";

const directions = {
  fontWeight: "lighter",
  color: "purple",
  margin: "10px",
  fontSize: "20px",
};

const RightArrow = () => {
  return (
    <span className="portfolio" style={directions}>
      <a href="/about">
        {" "}
        <img src={RightArrowPic} style={{ width: "20px", height: "20px" }} />
      </a>
    </span>
  );
};

export default RightArrow;
