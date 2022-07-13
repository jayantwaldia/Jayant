import React from "react";
import "../styles/About.css";

function About() {
  return (
    <div className="Main">
      <p className="MyName">Jayant Waldia</p>
      <p className="Description">
        code x design. working with <span className="Highlight"> react </span>+
        <span className="Highlight"> typescript </span>+
        <span className="Highlight"> figma </span>
        as an engineer at
        <span className="Highlight"> Virtusa </span>
      </p>
    </div>
  );
}

export default About;
