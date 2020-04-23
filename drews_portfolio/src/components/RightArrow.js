import React from "react";
import RightArrowPic from "../images/right-arrow.png";

const RightArrow = () => {
  let directions = {
    fontWeight: "lighter",
    color: "purple",
    margin: "10px",
    fontSize: "20px",
    textDecoration: "none",
  };

  if (window.location.pathname == "/about") {
    directions = {
      display: "none",
    };
  }

  return (
    <a href="/about" className="arrow" style={directions}>
      <span className="about" style={directions}>
        <img src={RightArrowPic} style={{ width: "20px", height: "20px" }} />
      </span>
      <span className="arrow" style={{ color: "gray", fontSize: "14px" }}>
        About
      </span>
    </a>
  );
};

export default RightArrow;
