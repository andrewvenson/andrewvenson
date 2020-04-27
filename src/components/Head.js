// Big floating head everywhere
import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import profilePic from "../images/profilePic.png";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";

const Head = () => {
  let headSize = "100px";
  let justifyContent = "center";

  if (window.location.pathname === "/projects") {
    justifyContent = "flex-start";
  } else if (window.location.pathname === "/about") {
    justifyContent = "flex-end";
  } else if (window.location.pathname === "/contact") {
    headSize = "150px";
  } else if (window.location.pathname === "/") {
    headSize = "200px";
  }

  let portfolioPicContainer = {
    display: "flex",
    justifyContent: `${justifyContent}`,
    alignItems: "center",
    marginTop: "15px",
  };

  let portfolioPic = {
    borderRadius: "50%",
    height: `${headSize}`,
    width: `${headSize}`,
    border: "1px solid lightgray",
    backgroundColor: "lightgray",
    boxShadow: "3px 5px 8px gray",
    background: `url(${profilePic})`,
    backgroundSize: "cover",
  };

  return (
    <Container>
      <div style={portfolioPicContainer}>
        <LeftArrow />
        <Link to="/contact">
          <div className="portfolioPic" style={portfolioPic}></div>
        </Link>
        <RightArrow />
      </div>
    </Container>
  );
};

export default Head;
