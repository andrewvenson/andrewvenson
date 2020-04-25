import React, { useState } from "react";
import ContactForm from "./ContactForm";

const ContactNav = () => {
  const cnav = {
    display: "flex",
    justifyContent: "center",
  };

  let [active, setActive] = useState(true);

  const setActiveState = (active) => {
    setActive(active);
  };

  const defaultNavItemStyle = {
    margin: "5px",
    border: "1px solid #754C78",
    borderRadius: "5px",
    padding: "5px",
    backgroundColor: "whitesmoke",
    color: "#754C78",
    textDecoration: "none",
    cursor: "pointer",
  };

  const selectedNavItemStyle = {
    margin: "5px",
    border: "1px solid #754C78",
    borderRadius: "5px",
    padding: "5px",
    backgroundColor: "#754C78",
    color: "whitesmoke",
    textDecoration: "none",
    cursor: "pointer",
  };

  return (
    <section>
      <div className="contactNav" style={cnav}>
        <span
          onClick={() => setActiveState(true)}
          style={active ? selectedNavItemStyle : defaultNavItemStyle}
        >
          I want to collaborate
        </span>
        <span
          onClick={() => setActiveState(false)}
          style={active ? defaultNavItemStyle : selectedNavItemStyle}
        >
          I want you to build me something
        </span>
      </div>
      <ContactForm active={active} />
    </section>
  );
};

export default ContactNav;
