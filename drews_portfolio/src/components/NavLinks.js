import React from "react";
import { NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

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
    <Link
      to={props.linkey}
      style={navLinkStyle}
      className={`navLink ${props.classN}`}
    >
      {props.name}
    </Link>
  );
};

export default NavLinks;
