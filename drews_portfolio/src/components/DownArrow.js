import React from "react";
import DownArrowPic from "../images/down-arrow.png";

const directions = {
  fontWeight: "lighter",
  color: "purple",
  margin: "10px",
  fontSize: "20px",
};

// const downArrow = {
//   display: "flex",
//   justifyContent: "flex-end",
//   fontWeight: "lighter",
//   color: "purple",
//   fontSize: "20px",
//   marginTop: "10px",
//   alignItems: "center",
// };

const DownArrow = () => {
  return (
    <span className="contact" style={directions}>
      <a href="/contact">
        {" "}
        <img src={DownArrowPic} style={{ width: "20px", height: "20px" }} />
      </a>
    </span>
  );
};

export default DownArrow;
