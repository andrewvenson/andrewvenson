import React from "react";
import { Container } from "react-bootstrap";
import profilePic from "../images/profilePic.png";

const Home = () => {
  const portfolioPicContainer = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "40vh",
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
    window.location.href = "/about";
  };

  const onHover = {
    boxShadow: "3px 5px 8px black",
  };
  return (
    <div>
      <Container>
        <div style={portfolioPicContainer}>
          <div
            onClick={anywhere}
            className="portfolioPic"
            style={portfolioPic}
          ></div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
