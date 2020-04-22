import React from "react";
import LeftArrowPic from "../images/left-arrow.png";

const LeftArrow = () => {
  let directions = {
    fontWeight: "lighter",
    color: "purple",
    margin: "10px",
    textDecoration: "none",
  };

  if (window.location.pathname == "/portfolio") {
    directions = {
      display: "none",
    };
  }
  return (
    <a href="/portfolio" className="portArrow" style={directions}>
      <span style={{ color: "lightgray", fontSize: "14px" }}>Portfolio</span>
      <span className="portfolio " style={directions}>
        <img src={LeftArrowPic} style={{ width: "20px", height: "20px" }} />
      </span>
    </a>
  );
};

export default LeftArrow;
