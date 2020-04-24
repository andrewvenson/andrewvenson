import React from "react";
import { Container } from "react-bootstrap";
import Head from "../components/Head";
import ContactNav from "../components/ContactNav";
import CollaborateForm from "../components/CollaborateForm";

const title = {
  display: "flex",
  justifyContent: "center",
  marginTop: "15px",
  fontFamily: "'Josefin Sans', sans-serif",
  color: "#754C78",
  textShadow: "2px 3px 8px gray",
};

const Contact = () => {
  return (
    <div>
      <Container>
        <Head />
        <h5 style={title}>Andrew Estefan Venson IV</h5>
        <ContactNav />
        <CollaborateForm />
      </Container>
    </div>
  );
};

export default Contact;
