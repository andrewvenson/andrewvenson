import React from "react";

const Title = (props) => {
  let titleStyle = {};
  if (window.location.pathname === "/about") {
    titleStyle = {
      display: "flex",
      justifyContent: "flex-start",
      fontWeight: "bold",
      margin: "0px",
      fontFamily: "'Josefin Sans', sans-serif",
      color: "#754C78",
      textShadow: "2px 3px 8px gray",
    };
  } else if (window.location.pathname === "/projects") {
    titleStyle = {
      display: "flex",
      justifyContent: "flex-end",
      fontWeight: "bold",
      margin: "0px",
      fontFamily: "'Josefin Sans', sans-serif",
      color: "#754C78",
      textShadow: "2px 3px 8px gray",
    };
  }
  return <h4 style={titleStyle}>{props.name}</h4>;
};

export default Title;
