// Portfolio Page
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Head from "../components/Head";
import Title from "../components/Title";
import PortfolioProjects from "../components/PortfolioProjects";
import PyCdv from "../images/pycdv.PNG";
import JsCodeQuiz from "../images/codequizhome.PNG";
import SecurePw from "../images/pwgenerated.PNG";

const Portfolio = () => {
  // projecttext
  let pycdv =
    "PyCDV is a website that compiles statistics, facts, and information about our current COVID-19 pandemic";
  let lorem = "Pending creation...";

  let securepwgenerator =
    "An intuitive password generator application that creates a random secure string of characters based on your required criteria.";

  let codequiz =
    "This application sets a timer for 75 seconds for you to answer as many javascript related multiple choice questions before the timer runs out.";
  const projectContainer = {
    marginBottom: "65px",
  };
  const colStyling = {
    padding: "0px",
    margin: "0px",
  };
  return (
    <div style={{ paddingBottom: "100px" }}>
      <Container>
        <Head />
        <Title name="Projects" />
        <hr style={{ color: "black", width: "200px" }} />
        <Row style={projectContainer}>
          <Col style={colStyling}>
            <PortfolioProjects
              appUrl="https://pycdv.com"
              appName="Pycdv"
              appDetails={pycdv}
              appImage={PyCdv}
            />
          </Col>
          <Col style={colStyling}>
            <PortfolioProjects
              appUrl="https://securepwgenerator.herokuapp.com"
              appImage={SecurePw}
              appName="SecurePWGenerator"
              appDetails={securepwgenerator}
            />
          </Col>
          <Col style={colStyling}>
            <PortfolioProjects
              appUrl="https://jscodequiz.herokuapp.com"
              appImage={JsCodeQuiz}
              appName="JS Code Quiz"
              appDetails={codequiz}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Portfolio;
