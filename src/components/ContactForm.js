// Contact Form on Contact page
import React, { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

const ContactForm = (props) => {
  const [contact, setContact] = useState({
    email: "",
    lastname: "",
    firstname: "",
    company: "",
    info: "",
  });

  const collabFormContainer = {
    justifyContent: "center",
    display: "flex",
  };

  const sendContactEmail = () => {
    if (
      contact.lastname !== "" &&
      contact.firstname !== "" &&
      contact.info !== "" &&
      contact.email !== ""
    ) {
      axios
        .post("https://vensonemail.herokuapp.com/post/sendemail", contact)
        .then((response) => console.log(response.data));
    }
  };

  // Changes text depending on state -> props
  return (
    <article style={collabFormContainer}>
      <Form style={{ width: "500px" }}>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            placeholder="First Name ..."
            value={contact.firstname}
            onChange={(e) =>
              setContact({ ...contact, firstname: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            placeholder="Last Name ..."
            value={contact.lastname}
            onChange={(e) =>
              setContact({ ...contact, lastname: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            placeholder="Company ..."
            value={contact.company}
            onChange={(e) =>
              setContact({ ...contact, company: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Control
            type="phone"
            placeholder="Phone ..."
            value={contact.email}
            onChange={(e) => setContact({ ...contact, email: e.target.value })}
          />
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
            value={contact.info}
            onChange={(e) => setContact({ ...contact, info: e.target.value })}
          />
        </Form.Group>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button variant="dark" onClick={() => sendContactEmail()}>
            {props.active ? "Collaborate" : "Build"}
          </Button>
        </div>
      </Form>
    </article>
  );
};

export default ContactForm;
