// Portfolio component
import React from "react";
import { Link } from "react-router-dom";

const PortfolioProjects = (props) => {
  const Project = {
    border: "1px solid lightgray",
    width: "350px",
    height: "400px",
    margin: "10px",
    padding: "10px",
    borderRadius: "10px",
    boxShadow: "3px 4px 15px lightgray",
    backgroundColor: "whitesmoke",
    position: "relative",
  };

  const projectImage = {
    width: "100%",
    height: "60%",
    borderRadius: "10px",
    border: "1px solid lightgray",
  };

  return (
    <section className="portProj" style={Project}>
      <a
        style={{ color: "rgb(121, 100, 121)" }}
        href={props.appUrl}
        className="projectUrl"
      >
        <h4>{props.appName}</h4>
      </a>
      <a
        style={{
          color: "rgb(121, 100, 121)",
          position: "absolute",
          right: 5,
          top: -2,
        }}
        href={props.gitUrl}
        className="projectUrl"
      >
        <img
          src="https://octodex.github.com/images/daftpunktocat-thomas.gif"
          style={{
            height: "50px",
            width: "50px",
            filter: "drop-shadow(5px 5px 5px gray)",
          }}
          alt="github"
        />
      </a>

      <img style={projectImage} src={props.appImage} alt="project" />
      <p
        style={{
          color: "gray",
          marginTop: "5px",
          fontSize: "16px",
        }}
      >
        {props.appDetails}
      </p>
      <Link
        to="/contact"
        style={{
          position: "absolute",
          bottom: "5px",
          backgroundColor: "#343A40",
          padding: "5px",
          borderRadius: "10px",
          textDecoration: "none",
          color: "rgb(168, 145, 168)",
          width: "94%",
          boxShadow: "2px 4px 6px lightgray",
        }}
      >
        Like this app? Contact me for more information
      </Link>
    </section>
  );
};

export default PortfolioProjects;
