import React from "react";
import { Container } from "react-bootstrap";
import profilePic from "../images/profilePic.png";
import Head from "../components/Head";
import homeRun from "../images/home-run.png";
import RightArrow from "../images/right-arrow.png";
import LeftArrow from "../images/left-arrow.png";
import Resume from "../images/resume.PNG";
import Github from "../images/GitHub-Mark-32px.png";
import Linkedin from "../images/linkedin.png";

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

  const title = {
    display: "flex",
    justifyContent: "center",
    marginTop: "15px",
    fontFamily: "'Josefin Sans', sans-serif",
    color: "#754C78",
    textShadow: "2px 3px 8px gray",
    fontWeight: "bold",
  };

  return (
    <div>
      <Container>
        <Head />
        <h1 className="homeTitle" style={title}>
          Andrew Estefan Venson IV
        </h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <a
            style={{ margin: "5px" }}
            href="https://github.com/andrewvenson"
            target="_blank"
          >
            <span>
              <img
                src={Github}
                style={{ width: "32px", height: "32px", marginRight: "3px" }}
              />
            </span>
            <span style={{ color: "#754C78" }}>
              https://github.com/andrewvenson
            </span>
          </a>
          <a
            style={{ margin: "5px" }}
            href="https://www.linkedin.com/in/andrew-venson-b6935a118/"
            target="_blank"
          >
            <span>
              <img src={Linkedin} style={{ width: "32px", height: "32px" }} />
            </span>
            <span style={{ color: "#754C78" }}>
              https://www.linkedin.com/in/andrew-venson-b6935a118/
            </span>
          </a>
        </div>
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
              to view my{" "}
              <span style={{ fontWeight: "bold", color: "black" }}>
                PROJECTS
              </span>
              .
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
              <span style={{ fontWeight: "bold", color: "black" }}>
                ABOUT ME
              </span>
              . If you would like to{" "}
              <span style={{ fontWeight: "bold", color: "black" }}>
                CONTACT ME
              </span>{" "}
              just
              <span style={direction}>
                {" "}
                click my{" "}
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
              </span>{" "}
              <span style={direction}> Click the</span>{" "}
              <span>
                <img
                  src={Resume}
                  style={{ width: "30px", height: "30px", borderRadius: "5px" }}
                  alt="Home"
                />
              </span>{" "}
              in the bottom left corner to view my{" "}
              <span style={{ fontWeight: "bold", color: "black" }}>RESUME</span>
              . Last and least
              <span style={direction}>
                {" "}
                click the{" "}
                <img
                  src={homeRun}
                  style={{ width: "30px", height: "30px", borderRadius: "5px" }}
                  alt="Home"
                />
              </span>{" "}
              in the right corner to get back here :)
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
