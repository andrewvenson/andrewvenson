import React from "react";

const ContactNav = () => {
  const cnav = {
    display: "flex",
    justifyContent: "center",
  };
  return (
    <div style={cnav}>
      <span
        style={{
          margin: "5px",
          border: "1px solid lightgray",
          borderRadius: "5px",
          padding: "5px",
          backgroundColor: "#754C78",
          color: "whitesmoke",
        }}
      >
        I want to collaborate
      </span>
      <span
        style={{
          margin: "5px",
          border: "1px solid #754C78",
          borderRadius: "5px",
          padding: "5px",
          backgroundColor: "whitesmoke",
          color: "#754C78",
        }}
      >
        I want you to build me something
      </span>
    </div>
  );
};

export default ContactNav;
