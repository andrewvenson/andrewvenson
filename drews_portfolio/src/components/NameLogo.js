import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NameLogo = () => {
  let navLinkStyle = {
    color: "rgb(168, 145, 168)",
  };
  console.log(window.location.pathname);
  if (window.location.pathname === "/") {
    navLinkStyle = {
      borderBottom: "2px solid purple",
      color: "rgb(121, 100, 121)",
      fontWeight: "bolder",
    };
  }
  return (
    <Navbar.Brand className="myName" style={navLinkStyle}>
      <Link to="/">
        <h1>Andrew V.</h1>
      </Link>
    </Navbar.Brand>
  );
};

export default NameLogo;
