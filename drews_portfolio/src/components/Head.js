import React from "react";
import { Container } from "react-bootstrap";
import profilePic from "../images/profilePic.png";

const Head = () => {
  const portfolioPicContainer = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "50px",
  };
  const portfolioPic = {
    borderRadius: "50%",
    height: "250px",
    width: "250px",
    border: "1px solid lightgray",
    backgroundColor: "lightgray",
    boxShadow: "3px 5px 8px gray",
    background: `url(${profilePic})`,
    backgroundSize: "cover",
  };
  const anywhere = () => {
    window.location.href = "/";
  };

  const onHover = {
    boxShadow: "3px 5px 8px black",
  };

  const directions = {
    fontWeight: "lighter",
    color: "purple",
    margin: "10px",
    fontSize: "20px",
  };

  const left = "<";
  const right = ">";
  const down = "v";

  return (
    <Container>
      <div style={portfolioPicContainer}>
        <span className="directional" style={directions}>
          <a href="/portfolio">{left}</a>
        </span>
        <div
          onClick={anywhere}
          className="portfolioPic"
          style={portfolioPic}
        ></div>
        <span className="directional" style={directions}>
          <a href="/about">{right}</a>
        </span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontWeight: "lighter",
          color: "purple",
          fontSize: "20px",
          marginTop: "10px",
        }}
      >
        <span className="directional">
          <a href="/contact">{down}</a>
        </span>
      </div>
    </Container>
  );
};

export default Head;
