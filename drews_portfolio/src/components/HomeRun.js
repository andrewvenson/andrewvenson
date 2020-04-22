import React from "react";
import homeRun from "../images/home-run.png";

const HomeRun = () => {
  return (
    <a href="/">
      <img
        className="home"
        src={homeRun}
        style={{ width: "50px", height: "50px" }}
      />
    </a>
  );
};

export default HomeRun;
