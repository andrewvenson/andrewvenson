// Portfolio Page
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Head from "../components/Head";
import Title from "../components/Title";
import PortfolioProjects from "../components/PortfolioProjects";
import PyCdv from "../images/pycdv.PNG";
import DayAdd from "../images/dayadd.PNG";
import PubIo from "../images/pubioimages.png";
import WeatherRecast from "../images/weatherrecast.PNG";
import Autoban from "../images/projectBoard.png";
import PritchardElectric from "../images/pritchardElectric.png";

import JsCodeQuiz from "../images/codequizhome.PNG";
import SecurePw from "../images/pwgenerated.PNG";

const Portfolio = () => {
  // projecttext
  let pe = "Pritchard Electric company website.";

  let pycdv =
    "PyCDV is a website that compiles statistics, facts, and information about the COVID-19 pandemic.";

  let securepwgenerator =
    "Generates secure passwords based on your specified criteria.";

  let codequiz =
    "Test your knowledge of Javascript with this multiple choice style quiz before the timer runs out.";

  let dayplannerplus =
    "A calendar application to add, edit, and delete events for the day.";

  let weatherrecast =
    "Search for any city and display current and 5 day weather forecast.";

  let pubio =
    "A mobile app that provides users with a fun, social experience by marketing curated brewery crawls with special drink discounts.";

  let autoban =
    "Autoban is a project management tool that allows users to create kanban boards; With access to create teams.";
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
              appUrl="https://pritchard-electric.vercel.app"
              appName="Pritchard Electric"
              appDetails={pe}
              appImage={PritchardElectric}
              gitUrl="https://github.com/andrewvenson/pritchard-electric"
            />
          </Col>
          <Col style={colStyling}>
            <PortfolioProjects
              appUrl="https://expo.io/@pubio/pubIO"
              appName="pubIO"
              appDetails={pubio}
              appImage={PubIo}
              gitUrl="https://github.com/pubIO-2020/pubIO"
            />
          </Col>
          <Col style={colStyling}>
            <PortfolioProjects
              appUrl="https://autobanprod.herokuapp.com"
              appName="Autoban"
              appDetails={autoban}
              appImage={Autoban}
              gitUrl="https://github.com/TheAutobanApp/Autoban"
            />
          </Col>
          <Col style={colStyling}>
            <PortfolioProjects
              appUrl="https://dayplannerplus.herokuapp.com"
              appName="Dayplanner+"
              appDetails={dayplannerplus}
              appImage={DayAdd}
              gitUrl="https://github.com/andrewvenson/dayplanner"
            />
          </Col>
          <Col style={colStyling}>
            <PortfolioProjects
              appUrl="https://pycdv.com"
              appName="Pycdv"
              appDetails={pycdv}
              appImage={PyCdv}
              gitUrl="https://github.com/andrewvenson/py-dash"
            />
          </Col>
          <Col style={colStyling}>
            <PortfolioProjects
              appUrl="https://securepwgenerator.herokuapp.com"
              appImage={SecurePw}
              appName="SecurePWGenerator"
              appDetails={securepwgenerator}
              gitUrl="https://github.com/andrewvenson/Password_Generator"
            />
          </Col>
          <Col style={colStyling}>
            <PortfolioProjects
              appUrl="https://jscodequiz.herokuapp.com"
              appImage={JsCodeQuiz}
              appName="JS Code Quiz"
              appDetails={codequiz}
              gitUrl="https://github.com/andrewvenson/codequiz"
            />
          </Col>
          {/* <Col style={colStyling}>
            <PortfolioProjects
              appUrl="https://weatherrecast.herokuapp.com/"
              appName="Weatherrecast"
              appDetails={weatherrecast}
              appImage={WeatherRecast}
              gitUrl="https://github.com/andrewvenson/weathercast"
            />
          </Col> */}
        </Row>
      </Container>
    </div>
  );
};

export default Portfolio;
