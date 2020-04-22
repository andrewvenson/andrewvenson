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
    window.location.href = "/about";
  };

  const onHover = {
    boxShadow: "3px 5px 8px black",
  };

  const directions = {
    fontWeight: "bolder",
    color: "purple",
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
        <div style={infoBox}>
          <p>
            Yup, that big goofy head in the center of the page is me.
            <span style={directions}> Drag that head to the LEFT </span> to view
            my projects. <span style={directions}>Drag me to the RIGHT </span>
            to get a little information about me. If you would like to contact
            me just
            <span style={directions}> drag me DOWN</span>.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Home;
