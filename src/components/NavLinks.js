import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = (props) => {
  let navLinkStyle = {
    borderBottom: "2px solid purple",
    color: "rgb(121, 100, 121)",
    fontWeight: "bolder",
  };

  return (
    <NavLink to={props.linkey} className="navLink" activeStyle={navLinkStyle}>
      {props.name}
    </NavLink>
  );
};

export default NavLinks;
