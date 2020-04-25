import React from "react";
import { Form } from "react-bootstrap";

const ContactForm = (props) => {
  const collabFormContainer = {
    justifyContent: "center",
    display: "flex",
  };

  return (
    <div style={collabFormContainer}>
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
            placeholder="Description of collaboration project ..."
          />
        </Form.Group>
      </Form>
    </div>
  );
};

export default ContactForm;
