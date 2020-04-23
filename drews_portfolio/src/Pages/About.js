import React from "react";
import { Container } from "react-bootstrap";
import Head from "../components/Head";
import Title from "../components/Title";
import AboutMe from "../components/AboutMe";
import AboutLang from "../components/AboutLang";

const About = () => {
  return (
    <div>
      <Container>
        <Head />
        <Title name="About me" />
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <AboutMe />
          <AboutLang />
        </div>
      </Container>
    </div>
  );
};

export default About;
