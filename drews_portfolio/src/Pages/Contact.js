import React from "react";
import { Container } from "react-bootstrap";
import Head from "../components/Head";

const Contact = () => {
  return (
    <div>
      <Container>
        <h3>Contact</h3>
        <Head />
        <h5
          style={{
            fontWeight: "bold",
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          Andrew Estefan Venson IV
        </h5>
      </Container>
    </div>
  );
};

export default Contact;
