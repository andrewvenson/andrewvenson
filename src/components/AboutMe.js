// About me text Component
import React from "react";

const AboutMe = () => {
  const AboutMeText = {
    border: "1px solid lightgray",
    padding: "7px",
    borderRadius: "10px",
    marginTop: "25px",
    width: "500px",
    boxShadow: "3px 5px 17px lightgray",
    fontFamily: "'Josefin Sans', sans-serif",
    color: "#6b6b6b",
  };
  return (
    <article>
      <p className="AboutMeText" style={AboutMeText}>
        My name is Andrew, a self taught developer that just cant shy away from
        a good learning opportunity. I'm experienced in automations,
        integrations, web development, and scripting. Those to the right, are
        some of the languages I'm experienced in.
      </p>
    </article>
  );
};

export default AboutMe;
