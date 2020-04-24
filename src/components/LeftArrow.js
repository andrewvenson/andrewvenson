import React from "react";
import { Link } from "react-router-dom";
import LeftArrowPic from "../images/left-arrow.png";

const LeftArrow = () => {
  let directions = {
    fontWeight: "lighter",
    color: "purple",
    margin: "10px",
    textDecoration: "none",
  };

  if (window.location.pathname === "/projects") {
    directions = {
      display: "none",
    };
  }
  return (
    <Link to="/projects" className="arrow" style={directions}>
      <span className="arrow" style={{ color: "gray", fontSize: "14px" }}>
        Projects
      </span>
      <span className="portfolio " style={directions}>
        <img
          src={LeftArrowPic}
          style={{ width: "20px", height: "20px" }}
          alt="Left Arrow"
        />
      </span>
    </Link>
  );
};

export default LeftArrow;
