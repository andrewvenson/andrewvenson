// Contact Form on Contact page
import React, { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import PropagateLoader from "react-spinners/PropagateLoader";

const ContactForm = (props) => {
  const [contact, setContact] = useState({
    email: "",
    phone: "",
    lastname: "",
    firstname: "",
    company: "",
    info: "",
  });

  const [error, showError] = useState(false);
  const [success, showSuccess] = useState(false);
  const [loader, showLoader] = useState(false);

  const initContact = {
    email: "",
    phone: "",
    lastname: "",
    firstname: "",
    company: "",
    info: "",
  };

  const collabFormContainer = {
    justifyContent: "center",
    display: "flex",
  };

  const sendContactEmail = () => {
    showLoader(true);
    if (
      contact.lastname !== "" &&
      contact.firstname !== "" &&
      contact.info !== "" &&
      contact.email !== "" &&
      contact.phone !== "" &&
      contact.company !== ""
    ) {
      showError(false);
      axios
        .post("https://vensonemail.herokuapp.com/post/sendemail", contact)
        .then((response) => {
          showLoader(false);
          showSuccess(true);
          setContact(initContact);
          setTimeout(showSuccess(false), 3000);
        });
    } else {
      showError(true);
      showLoader(false);
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
            type="email"
            placeholder="Email ..."
            value={contact.email}
            onChange={(e) => setContact({ ...contact, email: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Control
            type="phone"
            placeholder="Phone ..."
            value={contact.phone}
            onChange={(e) => setContact({ ...contact, phone: e.target.value })}
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
        {error && <p style={{ color: "red" }}>All fields are required</p>}
        {loader ? (
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <PropagateLoader color="#754C78" />
          </div>
        ) : (
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button variant="dark" onClick={() => sendContactEmail()}>
              {props.active ? "Collaborate" : "Build"}
            </Button>
          </div>
        )}
        {success && (
          <div
            style={{
              backgroundColor: "#754C78",
              padding: "20px",
              marginTop: "10px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <p style={{ color: "white" }}>
              Thank you! I will get in contact with you shortly.
            </p>
          </div>
        )}
      </Form>
    </article>
  );
};

export default ContactForm;
