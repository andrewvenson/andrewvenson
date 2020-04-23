import React from "react";
import { Container } from "react-bootstrap";
import Head from "../components/Head";
import Title from "../components/Title";
import AboutMe from "../components/AboutMe";

const About = () => {
  return (
    <div>
      <Container>
        <Head />
        <Title name="About" />
        <AboutMe />
      </Container>
    </div>
  );
};

export default About;
