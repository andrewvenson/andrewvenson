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
    height: "200px",
    width: "200px",
    border: "1px solid lightgray",
    backgroundColor: "lightgray",
    boxShadow: "3px 5px 8px gray",
    background: `url(${profilePic})`,
    backgroundSize: "cover",
  };

  if (window.location.pathname == "/projects") {
    portfolioPicContainer = {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      marginTop: "10px",
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
      marginTop: "10px",
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
      justifyContent: "center",
      alignItems: "center",
      marginTop: "10px",
    };
    portfolioPic = {
      borderRadius: "50%",
      height: "150px",
      width: "150px",
      border: "1px solid lightgray",
      backgroundColor: "lightgray",
      boxShadow: "3px 5px 8px gray",
      background: `url(${profilePic})`,
      backgroundSize: "cover",
    };
  }

  const contact = () => {
    window.location.href = "/contact";
  };

  const onHover = {
    boxShadow: "3px 5px 8px black",
  };

  return (
    <Container>
      <div style={portfolioPicContainer}>
        <LeftArrow />
        <div
          onClick={contact}
          className="portfolioPic"
          style={portfolioPic}
        ></div>
        <RightArrow />
      </div>
    </Container>
  );
};

export default Head;
