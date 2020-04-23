import React from "react";
import { Link } from "react-router-dom";
import RightArrowPic from "../images/right-arrow.png";

const RightArrow = () => {
  let directions = {
    fontWeight: "lighter",
    color: "purple",
    margin: "10px",
    fontSize: "20px",
    textDecoration: "none",
  };

  if (window.location.pathname === "/about") {
    directions = {
      display: "none",
    };
  }

  return (
    <Link to="/about" className="arrow" style={directions}>
      <span className="about" style={directions}>
        <img
          src={RightArrowPic}
          style={{ width: "20px", height: "20px" }}
          alt="Right Arrow"
        />
      </span>
      <span className="arrow" style={{ color: "gray", fontSize: "14px" }}>
        About
      </span>
    </Link>
  );
};

export default RightArrow;
