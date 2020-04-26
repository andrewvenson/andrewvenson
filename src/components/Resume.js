import React from "react";
import { Link } from "react-router-dom";
import resume from "../images/resume.PNG";

const Resume = () => {
  return (
    <Link to="/">
      <img
        className="resume"
        src={resume}
        style={{
          width: "50px",
          height: "50px",
          filter: "drop-shadow(12px 12px 25px rgba(0,0,0,0.5))",
          borderRadius: "5px",
        }}
        alt="Resume"
      />
    </Link>
  );
};

export default Resume;
