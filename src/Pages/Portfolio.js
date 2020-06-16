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

import JsCodeQuiz from "../images/codequizhome.PNG";
import SecurePw from "../images/pwgenerated.PNG";

const Portfolio = () => {
  // projecttext
  let pycdv =
    "PyCDV is a website that compiles statistics, facts, and information about our current COVID-19 pandemic";

  let securepwgenerator =
    "An intuitive password generator application that creates a random secure string of characters based on your required criteria.";

  let codequiz =
    "This application sets a timer for 75 seconds for you to answer as many javascript related multiple choice questions before the timer runs out.";

  let dayplannerplus =
    "A calendar application to add, edit, and delete events for the day.";

  let weatherrecast =
    "Weatherrecast is an application built using ReactJS, HTML, CSS, & Firebase. This application allows you to search for any city and display current weather forecast along with the next 5 days forecast.";

  let pubio =
    "pubIO is a mobile app built in React Native that provides users with a fun, social experience by marketing curated bar & brewery crawls to the user with special drink discounts.";

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
              appUrl="https://expo.io/@pubio/pubIO"
              appName="pubIO"
              appDetails={pubio}
              appImage={PubIo}
              gitUrl="https://github.com/pubIO-2020/pubIO"
            />
          </Col>
          <Col style={colStyling}>
            <PortfolioProjects
              appUrl="https://weatherrecast.herokuapp.com/"
              appName="Weatherrecast"
              appDetails={weatherrecast}
              appImage={WeatherRecast}
              gitUrl="https://github.com/andrewvenson/weathercast"
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
        </Row>
      </Container>
    </div>
  );
};

export default Portfolio;
