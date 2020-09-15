// Github & Linkedin links on home page
import React from "react";
import Github from "../images/GitHub-Mark-32px.png";
import Linkedin from "../images/linkedin.png";

const GitinLinks = () => {
  return (
    <div
      className="GitinLinks"
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <a
        style={{ margin: "5px" }}
        href="https://github.com/andrewvenson"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>
          <img
            src={Github}
            style={{ width: "32px", height: "32px", marginRight: "3px" }}
            alt="Github"
          />
        </span>
        <span style={{ color: "#754C78" }}>
          https://github.com/andrewvenson
        </span>
      </a>
      <a
        style={{ margin: "5px" }}
        href="https://www.linkedin.com/in/andrew-venson-iv-b6935a118/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>
          <img
            src={Linkedin}
            style={{ width: "32px", height: "32px" }}
            alt="Linkedin"
          />
        </span>
        <span style={{ color: "#754C78" }}>
          https://www.linkedin.com/in/andrew-venson-iv-b6935a118/
        </span>
      </a>
    </div>
  );
};

export default GitinLinks;
