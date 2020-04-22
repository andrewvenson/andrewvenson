import React from "react";
import { Container } from "react-bootstrap";
import profilePic from "../images/profilePic.png";
import Draggable from "react-draggable";
const Home = () => {
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

  const infoBox = {
    width: "300px",
    borderRadius: "10px",
    border: "1px solid lightgray",
    padding: "10px",
    marginTop: "15px",
  };

  const anywhere = () => {
    window.location.href = "/about";
  };

  const onHover = {
    boxShadow: "3px 5px 8px black",
  };

  const directions = {
    fontWeight: "lighter",
    color: "purple",
    margin: "10px",
    // display: "none",
  };

  const left = "<";
  const right = ">";
  const down = "v";
  return (
    <div>
      <Container>
        <div style={portfolioPicContainer}>
          <span className="directional" style={directions}>
            {left}
          </span>
          <div
            onClick={anywhere}
            className="portfolioPic"
            style={portfolioPic}
          ></div>
          <span className="directional" style={directions}>
            {right}
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            fontWeight: "lighter",
            color: "purple",
            // display: "none",
          }}
        >
          {down}
        </div>
        <div className="infoBoxContainer">
          <div className="infoBox" style={infoBox}>
            <p>
              Yup, that big goofy head up there is me page is me.
              <span style={directions}> Drag that head to the LEFT</span> to
              view my projects.
              <span style={directions}>Drag me to the RIGHT</span>
              to get a little information about me. If you would like to contact
              me just
              <span style={directions}>drag me DOWN.</span>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
