import React from "react";
import { Navbar } from "react-bootstrap";

const NameLogo = () => {
  let navLinkStyle = {
    color: "rgb(168, 145, 168)",
  };
  console.log(window.location.pathname);
  if (window.location.pathname === "/drews_portfolio/") {
    navLinkStyle = {
      borderBottom: "2px solid purple",
      color: "rgb(121, 100, 121)",
      fontWeight: "bolder",
    };
  }
  return (
    <Navbar.Brand
      href={process.env.PUBLIC_URL + "/"}
      className="myName"
      style={navLinkStyle}
    >
      <h1>Andrew V.</h1>
    </Navbar.Brand>
  );
};

export default NameLogo;
