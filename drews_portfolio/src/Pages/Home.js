import React from "react";
import { Container } from "react-bootstrap";
import profilePic from "../images/profilePic.png";
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

  const direction = {
    color: "purple",
    fontWeight: "lighter",
  };

  const left = "<";
  const right = ">";
  const down = "v";

  return (
    <div>
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
        <div className="infoBoxContainer">
          <div className="infoBox" style={infoBox}>
            <p>
              Yup, that big goofy head up there is me.
              <span style={direction}>
                {" "}
                Click the LEFT
                <span style={{ fontWeight: "bolder" }}> {left} </span>
              </span>
              to view my projects.
              <span style={direction}>
                {" "}
                Click the RIGHT
                <span style={{ fontWeight: "bolder" }}> {right} </span>
              </span>
              to get a little information about me. If you would like to contact
              me just
              <span style={direction}>
                {" "}
                click the DOWN
                <span style={{ fontWeight: "bolder" }}> {down}</span>.
              </span>
              <span style={{ fontWeight: "bolder" }}>
                {" "}
                Click the infamous head to get back here.
              </span>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
