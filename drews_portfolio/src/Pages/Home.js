import React from "react";
import { Container } from "react-bootstrap";
import profilePic from "../images/profilePic.png";
import Head from "../components/Head";
import homeRun from "../images/home-run.png";
import RightArrow from "../images/right-arrow.png";
import LeftArrow from "../images/left-arrow.png";

const Home = () => {
  const infoBox = {
    width: "350px",
    borderRadius: "10px",
    border: "1px solid lightgray",
    padding: "10px",
    marginTop: "50px",
    boxShadow: "3px 5px 8px lightgray",
  };

  const direction = {
    color: "purple",
    fontWeight: "lighter",
  };

  return (
    <div>
      <Container>
        <Head />
        <div className="infoBoxContainer">
          <div className="infoBox" style={infoBox}>
            <p>
              Yup, that big goofy head up there belongs to me.
              <span style={direction}>
                {" "}
                Click the LEFT
                <span>
                  {" "}
                  <img
                    src={LeftArrow}
                    style={{ width: "15px", height: "15px" }}
                    alt="Left Arrow"
                  />
                </span>
              </span>
              to view <span style={{ fontWeight: "bold" }}>my projects</span>.
              <span style={direction}>
                {" "}
                Click the RIGHT
                <span>
                  {" "}
                  <img
                    src={RightArrow}
                    style={{ width: "15px", height: "15px" }}
                    alt="Right Arrow"
                  />
                </span>
              </span>
              to get a little information{" "}
              <span style={{ fontWeight: "bold" }}>about me</span>. If you would
              like to <span style={{ fontWeight: "bold" }}>contact me</span>{" "}
              just
              <span style={direction}>
                {" "}
                click my face{" "}
                <span>
                  <img
                    src={profilePic}
                    style={{
                      width: "35px",
                      height: "35px",
                      borderRadius: "50%",
                    }}
                    alt="Profile"
                  />
                  .
                </span>
              </span>
              <span>
                {" "}
                Oh and
                <span style={direction}> click the HOME</span>{" "}
                <span>
                  <img
                    src={homeRun}
                    style={{ width: "30px", height: "30px" }}
                    alt="Home"
                  />
                </span>{" "}
                in the bottom right corner to get back here!
              </span>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
