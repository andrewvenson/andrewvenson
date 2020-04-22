import React from "react";
import RightArrowPic from "../images/right-arrow.png";
import Title from "./Title";

const RightArrow = () => {
  let directions = {
    fontWeight: "lighter",
    color: "purple",
    margin: "10px",
    fontSize: "20px",
  };

  if (window.location.pathname == "/about") {
    directions = {
      display: "none",
    };
  }

  return (
    <div>
      <span className="about directional" style={directions}>
        <span>
          <a href="/about">
            {" "}
            <img
              src={RightArrowPic}
              style={{ width: "20px", height: "20px" }}
            />
          </a>
        </span>
      </span>
    </div>
  );
};

export default RightArrow;
