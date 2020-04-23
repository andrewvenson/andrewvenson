import React from "react";

const AboutMe = () => {
  const AboutMeText = {
    border: "1px solid lightgray",
    padding: "7px",
    borderRadius: "10px",
    marginTop: "25px",
    width: "500px",
    boxShadow: "3px 5px 17px lightgray",
  };
  return (
    <section>
      <p className="AboutMeText" style={AboutMeText}>
        My name is Andrew, a self taught developer that just cant shy away from
        a good learning opportunity. I fell in love with the art of coding from
        being exposed to the c++ programming language at a very young age. My
        enchantment with programming started with a small desire to be smarter
        than myself. I have a love for learning and enrichment, I've found that
        I am very good with soaking up a concept and making it fit my own style.
        Unfortunately, this sponge technique means I don't have much brainpower
        to allocate to anything that isn't technical (I often forget my
        girlfriend's birthday). She loves me anyway and understands that code
        will always be the lady in my life, but I guess I enjoy her too.
      </p>
    </section>
  );
};

export default AboutMe;
