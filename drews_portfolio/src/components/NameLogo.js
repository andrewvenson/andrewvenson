import React from "react";
import { Navbar } from "react-bootstrap";

const NameLogo = () => {
  let navLinkStyle = {
    color: "rgb(168, 145, 168)",
  };
  if (window.location.pathname === "/") {
    navLinkStyle = {
      borderBottom: "2px solid purple",
      color: "rgb(121, 100, 121)",
    };
  }
  return (
    <Navbar.Brand href="/" className="myName" style={navLinkStyle}>
      <h1>Andrew V.</h1>
    </Navbar.Brand>
  );
};

export default NameLogo;
