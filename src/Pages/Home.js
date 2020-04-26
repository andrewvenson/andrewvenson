import React from "react";
import { Container } from "react-bootstrap";
import Head from "../components/Head";
import GitinLinks from "../components/GitinLinks";
import InfoBox from "../components/InfoBox";
const Home = () => {
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
        <hr style={{ color: "black", width: "200px" }} />

        <GitinLinks />
        <hr style={{ color: "black", width: "200px" }} />
        <InfoBox />
      </Container>
    </div>
  );
};

export default Home;
