import React from "react";
import LeftArrowPic from "../images/left-arrow.png";
import Title from "./Title.js";

const LeftArrow = () => {
  let directions = {
    fontWeight: "lighter",
    color: "purple",
    margin: "10px",
    fontSize: "20px",
  };

  if (window.location.pathname == "/portfolio") {
    directions = {
      display: "none",
    };
  }
  return (
    <div>
      <span className="portfolio directional" style={directions}>
        <a href="/portfolio">
          {" "}
          <img src={LeftArrowPic} style={{ width: "20px", height: "20px" }} />
        </a>
      </span>
    </div>
  );
};

export default LeftArrow;
