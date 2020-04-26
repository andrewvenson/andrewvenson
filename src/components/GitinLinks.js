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
      >
        <span>
          <img
            src={Github}
            style={{ width: "32px", height: "32px", marginRight: "3px" }}
          />
        </span>
        <span style={{ color: "#754C78" }}>
          https://github.com/andrewvenson
        </span>
      </a>
      <a
        style={{ margin: "5px" }}
        href="https://www.linkedin.com/in/andrew-venson-b6935a118/"
        target="_blank"
      >
        <span>
          <img src={Linkedin} style={{ width: "32px", height: "32px" }} />
        </span>
        <span style={{ color: "#754C78" }}>
          https://www.linkedin.com/in/andrew-venson-b6935a118/
        </span>
      </a>
    </div>
  );
};

export default GitinLinks;
