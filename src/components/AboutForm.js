import React from "react";
import { Form } from "react-bootstrap";

const AboutForm = () => {
  const collabFormContainer = {
    justifyContent: "center",
    display: "flex",
  };
  return (
    <div style={collabFormContainer}>
      <Form style={{ width: "500px", marginTop: "25px" }}>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Control as="select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect2">
          <Form.Control as="select" multiple>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" rows="3" placeholder="Description..." />
        </Form.Group>
      </Form>
    </div>
  );
};

export default AboutForm;
