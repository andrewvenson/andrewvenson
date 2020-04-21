import React from "react";
import { Nav } from "react-bootstrap";

const NavLinks = (props) => {
  return (
    <Nav.Link className="navLink `{props.classN}`" href={props.linkey}>
      {props.name}
    </Nav.Link>
  );
};

export default NavLinks;
