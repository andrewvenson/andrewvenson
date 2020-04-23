import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Head from "../components/Head";
import Title from "../components/Title";
import PortfolioProjects from "../components/PortfolioProjects";

const Portfolio = () => {
  let ad = "these are the detials of the app";
  const projectContainer = {
    // display: "flex",
    // justifyContent: "space-between",
    // alignItems: "center",
    // height: "50vh",
  };
  const colStyling = {
    padding: "0px",
    margin: "0px",
  };
  return (
    <div>
      <Container>
        <Head />
        <Title name="Projects" />
        <Row style={projectContainer}>
          <Col style={colStyling}>
            <PortfolioProjects appName="Pycdv" appDetails={ad} />
          </Col>
          <Col style={colStyling}>
            <PortfolioProjects appName="Pycdv" appDetails={ad} />
          </Col>
          <Col style={colStyling}>
            <PortfolioProjects appName="Pycdv" appDetails={ad} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Portfolio;
