import React from "react";
import { Link } from "react-router-dom";
import homeRun from "../images/home-run.png";

const HomeRun = () => {
  return (
    <Link to="/">
      <img
        className="home"
        src={homeRun}
        style={{
          width: "50px",
          height: "50px",
          filter: "drop-shadow(12px 12px 25px rgba(0,0,0,0.5))",
        }}
        alt="Home"
      />
    </Link>
  );
};

export default HomeRun;
