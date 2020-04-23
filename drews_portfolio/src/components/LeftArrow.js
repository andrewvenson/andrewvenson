import React from "react";
import LeftArrowPic from "../images/left-arrow.png";

const LeftArrow = () => {
  let directions = {
    fontWeight: "lighter",
    color: "purple",
    margin: "10px",
    textDecoration: "none",
  };

  if (window.location.pathname == "/drews_portfolio/projects") {
    directions = {
      display: "none",
    };
  }
  return (
    <a
      href={process.env.PUBLIC_URL + "/projects"}
      className="arrow"
      style={directions}
    >
      <span className="arrow" style={{ color: "gray", fontSize: "14px" }}>
        Projects
      </span>
      <span className="portfolio " style={directions}>
        <img src={LeftArrowPic} style={{ width: "20px", height: "20px" }} />
      </span>
    </a>
  );
};

export default LeftArrow;
