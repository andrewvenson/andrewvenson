import React from "react";
import { Container } from "react-bootstrap";
import Head from "../components/Head";
import Title from "../components/Title";
import PortfolioProjects from "../components/PortfolioProjects";

const Portfolio = () => {
  let ad = "these are the detials of the app";
  const projectContainer = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "50vh",
  };
  return (
    <div>
      <Container>
        <Head />
        <Title name="Portfolio" />
        <div style={projectContainer}>
          <hr />
          <PortfolioProjects appName="Pycdv" appDetails={ad} />
          <PortfolioProjects appName="Pycdv" appDetails={ad} />
          <PortfolioProjects appName="Pycdv" appDetails={ad} />
        </div>
      </Container>
    </div>
  );
};

export default Portfolio;
