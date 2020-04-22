import React from "react";
import { Container } from "react-bootstrap";
import profilePic from "../images/profilePic.png";
import Head from "../components/Head";
import DownArrow from "../images/down-arrow.png";
import RightArrow from "../images/right-arrow.png";
import LeftArrow from "../images/left-arrow.png";

const Home = () => {
  const infoBox = {
    width: "300px",
    borderRadius: "10px",
    border: "1px solid lightgray",
    padding: "10px",
    marginTop: "15px",
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
              Yup, that big goofy head up there is me.
              <span style={direction}>
                {" "}
                Click the LEFT
                <span>
                  {" "}
                  <img
                    src={LeftArrow}
                    style={{ width: "10px", height: "10px" }}
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
                    style={{ width: "10px", height: "10px" }}
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
                  />
                  .
                </span>
              </span>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
