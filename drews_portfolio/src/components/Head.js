import React from "react";
import { Container } from "react-bootstrap";
import profilePic from "../images/profilePic.png";
import DownArrow from "../images/down-arrow.png";
import RightArrow from "../images/right-arrow.png";
import LeftArrow from "../images/left-arrow.png";

const Head = () => {
  let portfolioPicContainer = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "50px",
  };

  let downArrow = {
    display: "flex",
    justifyContent: "center",
    fontWeight: "lighter",
    color: "purple",
    fontSize: "20px",
    marginTop: "10px",
  };

  let portfolioPic = {
    borderRadius: "50%",
    height: "250px",
    width: "250px",
    border: "1px solid lightgray",
    backgroundColor: "lightgray",
    boxShadow: "3px 5px 8px gray",
    background: `url(${profilePic})`,
    backgroundSize: "cover",
  };

  if (window.location.pathname == "/portfolio") {
    portfolioPicContainer = {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      marginTop: "50px",
    };
    downArrow = {
      display: "flex",
      justifyContent: "flex-start",
      fontWeight: "lighter",
      color: "purple",
      fontSize: "20px",
      marginTop: "10px",
      alignItems: "center",
    };
    portfolioPic = {
      borderRadius: "50%",
      height: "100px",
      width: "100px",
      border: "1px solid lightgray",
      backgroundColor: "lightgray",
      boxShadow: "3px 5px 8px gray",
      background: `url(${profilePic})`,
      backgroundSize: "cover",
    };
  } else if (window.location.pathname == "/about") {
    portfolioPicContainer = {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      marginTop: "50px",
    };
    downArrow = {
      display: "flex",
      justifyContent: "flex-end",
      fontWeight: "lighter",
      color: "purple",
      fontSize: "20px",
      marginTop: "10px",
      alignItems: "center",
    };
    portfolioPic = {
      borderRadius: "50%",
      height: "100px",
      width: "100px",
      border: "1px solid lightgray",
      backgroundColor: "lightgray",
      boxShadow: "3px 5px 8px gray",
      background: `url(${profilePic})`,
      backgroundSize: "cover",
    };
  } else if (window.location.pathname == "/contact") {
    portfolioPicContainer = {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "center",
      marginTop: "50px",
    };
    downArrow = {
      display: "flex",
      justifyContent: "flex-end",
      fontWeight: "lighter",
      color: "purple",
      fontSize: "20px",
      marginTop: "10px",
      alignItems: "center",
    };
    portfolioPic = {
      borderRadius: "50%",
      height: "100px",
      width: "100px",
      border: "1px solid lightgray",
      backgroundColor: "lightgray",
      boxShadow: "3px 5px 8px gray",
      background: `url(${profilePic})`,
      backgroundSize: "cover",
    };
  }

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

  return (
    <Container>
      <div style={portfolioPicContainer}>
        <span className="directional portfolio" style={directions}>
          <a href="/portfolio">
            {" "}
            <img src={LeftArrow} style={{ width: "20px", height: "20px" }} />
          </a>
        </span>
        <div
          onClick={anywhere}
          className="portfolioPic"
          style={portfolioPic}
        ></div>
        <span className="directional" style={directions}>
          <a href="/about">
            {" "}
            <img src={RightArrow} style={{ width: "20px", height: "20px" }} />
          </a>
        </span>
      </div>
      <div style={downArrow}>
        <span className="directional">
          <a href="/contact">
            <img src={DownArrow} style={{ width: "20px", height: "20px" }} />
          </a>
        </span>
      </div>
    </Container>
  );
};

export default Head;
