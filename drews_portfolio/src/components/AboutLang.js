import React from "react";
import ReactLogo from "../images/react.png";
import PythonLogo from "../images/python.png";
import PhpLogo from "../images/php.png";
import JsLogo from "../images/javascript.png";
import MsLogo from "../images/mysql.png";

const AboutLang = () => {
  return (
    <section className="langs">
      <p
        className="myLangy"
        style={{ color: "gray", display: "flex", justifyContent: "center" }}
      >
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
      <img
        src={MsLogo}
        style={{ width: "60px", height: "60px", margin: "10px" }}
      />
    </section>
  );
};

export default AboutLang;
