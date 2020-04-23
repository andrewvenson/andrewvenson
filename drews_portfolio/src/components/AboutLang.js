import React from "react";
import ReactLogo from "../images/react.png";
import PythonLogo from "../images/python.png";
import PhpLogo from "../images/php.png";
import JsLogo from "../images/javascript.png";

const AboutLang = () => {
  return (
    <div>
      <section>
        <p style={{ color: "gray", display: "flex", justifyContent: "center" }}>
          My Languages
        </p>
        <img
          src={ReactLogo}
          style={{ width: "60px", height: "60px", margin: "10px" }}
        />
        <img
          src={PythonLogo}
          style={{ width: "60px", height: "60px", margin: "10px" }}
        />
        <img
          src={PhpLogo}
          style={{ width: "60px", height: "60px", margin: "10px" }}
        />
        <img
          src={JsLogo}
          style={{ width: "60px", height: "60px", margin: "10px" }}
        />
      </section>
    </div>
  );
};

export default AboutLang;
