import React from "react";
import { Link } from "react-router-dom";

const NavLinks = (props) => {
  let navLinkStyle = {};

  const test = () => {
    console.log(props.linkey);
    if (props.linkey === window.location.pathname) {
      console.log("yayyyy");
      navLinkStyle = {
        borderBottom: "2px solid purple !important",
        color: "rgb(121, 100, 121) !important",
        fontWeight: "bolder !important",
      };
    }

    return navLinkStyle;
  };

  return (
    <Link
      to={props.linkey}
      style={navLinkStyle}
      className="navLink"
      onClick={test}
    >
      {props.name}
    </Link>
  );
};

export default NavLinks;
