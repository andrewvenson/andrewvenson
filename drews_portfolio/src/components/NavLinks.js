import React from "react";
import { Nav } from "react-bootstrap";

const NavLinks = (props) => {
  let navLinkStyle = {
    color: "rgb(168, 145, 168)",
  };

  console.log(props.linkey);
  if (window.location.pathname === props.linkey) {
    navLinkStyle = {
      borderBottom: "2px solid purple",
      color: "rgb(121, 100, 121)",
      fontWeight: "bolder",
    };
  }
  return (
    <Nav.Link
      style={navLinkStyle}
      className={`navLink ${props.classN}`}
      href={props.linkey}
    >
      {props.name}
    </Nav.Link>
  );
};

export default NavLinks;
