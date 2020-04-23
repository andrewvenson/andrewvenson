import React from "react";
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NameLogo = () => {
  let navLinkStyle = {
    borderBottom: "2px solid purple",
    color: "rgb(121, 100, 121)",
    fontWeight: "bolder",
  };

  return (
    <Navbar.Brand className="myName">
      <NavLink activeStyle={navLinkStyle} to="/">
        <h1>Andrew V.</h1>
      </NavLink>
    </Navbar.Brand>
  );
};

export default NameLogo;
