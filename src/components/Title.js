import React from "react";

const Title = (props) => {
  let titleStyle = {};
  if (window.location.pathname === "/about") {
    titleStyle = {
      display: "flex",
      justifyContent: "flex-start",
      fontWeight: "bold",
      textShadow: "2px 4px 10px gray",
      margin: "0px",
    };
  } else if (window.location.pathname === "/projects") {
    titleStyle = {
      display: "flex",
      justifyContent: "flex-end",
      fontWeight: "bold",
      textShadow: "2px 4px 10px gray",
      margin: "0px",
    };
  }
  return <h4 style={titleStyle}>{props.name}</h4>;
};

export default Title;
