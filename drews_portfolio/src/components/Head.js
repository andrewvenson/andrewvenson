import React from "react";
import { Container } from "react-bootstrap";
import profilePic from "../images/profilePic.png";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";

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

  return (
    <Container>
      <div style={portfolioPicContainer}>
        <LeftArrow />
        <div
          onClick={anywhere}
          className="portfolioPic"
          style={portfolioPic}
        ></div>
        <RightArrow />
      </div>
    </Container>
  );
};

export default Head;
