// Contact Form on Contact page
import React from "react";
import { Form, Button } from "react-bootstrap";

const ContactForm = (props) => {
  const collabFormContainer = {
    justifyContent: "center",
    display: "flex",
  };

  // Changes text depending on state -> props
  return (
    <article style={collabFormContainer}>
      <Form style={{ width: "500px", marginTop: "25px" }}>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Control type="text" placeholder="Name ..." />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Control type="email" placeholder="Email ..." />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Control
            as="textarea"
            rows="3"
            placeholder={
              props.active
                ? "Description of collaboration project ..."
                : "Description of the project you want built ..."
            }
          />
        </Form.Group>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button variant="dark">
            {props.active ? "Collaborate" : "Build"}
          </Button>
        </div>
      </Form>
    </article>
  );
};

export default ContactForm;
