import React from "react";

const PortfolioProjects = (props) => {
  const Project = {
    border: "1px solid lightgray",
    width: "300px",
    height: "275px",
    margin: "10px",
    padding: "10px",
    borderRadius: "10px",
    boxShadow: "3px 4px 15px lightgray",
    backgroundColor: "whitesmoke",
  };
  return (
    <div style={Project}>
      <h4>{props.appName}</h4>
      <p>{props.appDetails}</p>
      <a>Like this site? Contact me for more information</a>
    </div>
  );
};

export default PortfolioProjects;
