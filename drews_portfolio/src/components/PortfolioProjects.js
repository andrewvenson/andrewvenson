import React from "react";

const PortfolioProjects = (props) => {
  const Project = {
    border: "1px solid lightgray",
    width: "350px",
    height: "275px",
    margin: "10px",
    padding: "10px",
    borderRadius: "10px",
    boxShadow: "3px 4px 15px lightgray",
    backgroundColor: "whitesmoke",
    position: "relative",
  };
  return (
    <div className="portProj" style={Project}>
      <h4>{props.appName}</h4>
      <p>{props.appDetails}</p>
      <a
        href="/contact"
        style={{
          position: "absolute",
          bottom: "5px",
          backgroundColor: "purple",
          padding: "5px",
          borderRadius: "10px",
          textDecoration: "none",
          //   fontWeight: "bold",
          color: "white",
          width: "95%",
          boxShadow: "2px 4px 6px lightgray",
        }}
      >
        Like this site? Contact me for more information
      </a>
    </div>
  );
};

export default PortfolioProjects;
