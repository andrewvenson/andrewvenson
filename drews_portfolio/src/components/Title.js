import React from "react";

const Title = (props) => {
  let titleStyle = {};
  if (window.location.pathname == "/about") {
    titleStyle = {
      display: "flex",
      justifyContent: "flex-start",
    };
  } else if (window.location.pathname == "/portfolio") {
    titleStyle = {
      display: "flex",
      justifyContent: "flex-end",
    };
  }
  return <h4 style={titleStyle}>{props.name}</h4>;
};

export default Title;
