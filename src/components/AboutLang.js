// Language images component
import React from "react";
import ReactLogo from "../images/react.png";
import PythonLogo from "../images/python.png";
import PhpLogo from "../images/php.png";
import JsLogo from "../images/javascript.png";
import MsLogo from "../images/mysql.png";
import Outlook from "../images/outlook.png";
import Netsmart from "../images/netsmart.png";
import Teams from "../images/teams.png";
import Genesys from "../images/genesys.PNG";

const AboutLang = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
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
          alt="React"
        />
        <img
          src={PythonLogo}
          style={{ width: "60px", height: "60px", margin: "10px" }}
          alt="Python"
        />
        <img
          src={PhpLogo}
          style={{ width: "60px", height: "60px", margin: "10px" }}
          alt="Php"
        />
        <img
          src={JsLogo}
          style={{ width: "60px", height: "60px", margin: "10px" }}
          alt="Javascript"
        />
        <img
          src={MsLogo}
          style={{ width: "60px", height: "60px", margin: "10px" }}
          alt="MySql"
        />
      </section>

      <hr style={{ color: "black", width: "200px" }} />
      <section>
        <p
          className="myLangy"
          style={{ color: "gray", display: "flex", justifyContent: "center" }}
        >
          Integrations & Automations
        </p>
        <img
          src={Outlook}
          style={{ width: "60px", height: "60px", margin: "10px" }}
          alt="Outlook"
        />
        <img
          src={Teams}
          style={{ width: "60px", height: "60px", margin: "10px" }}
          alt="Teams"
        />
        <img
          src={Netsmart}
          style={{ width: "60px", height: "60px", margin: "10px" }}
          alt="Netsmart"
        />
        <img
          src={Genesys}
          style={{ width: "60px", height: "60px", margin: "10px" }}
          alt="Genesys"
        />
      </section>
    </div>
  );
};

export default AboutLang;
