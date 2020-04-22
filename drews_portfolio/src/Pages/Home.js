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
              to view my projects.
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
              to get a little information about me. If you would like to contact
              me just
              <span style={direction}>
                {" "}
                click the DOWN
                <span style={{ fontWeight: "bolder" }}>
                  {" "}
                  <img
                    src={DownArrow}
                    style={{ width: "10px", height: "10px" }}
                  />
                  .
                </span>
              </span>
              <span style={{ fontWeight: "bolder" }}>
                {" "}
                You can always click my face{" "}
                <span>
                  <img
                    src={profilePic}
                    style={{
                      width: "35px",
                      height: "35px",
                      borderRadius: "50%",
                    }}
                  />
                </span>{" "}
                to get back here.
              </span>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
