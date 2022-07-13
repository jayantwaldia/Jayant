import React from "react";
import "../styles/Navbar.css";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import twitter from "../assets/twitter.svg";

function Navbar() {
  return (
    <div className="Nav">
      <div className="Pages">
        <div className="Page">
          <a href="#home" id="highlight" className="Home">
            home
          </a>
        </div>
        <div className="Page">
          <a href="#blog" id="highlight">
            blog
          </a>
        </div>
        <div className="Page">
          <a href="#library" id="highlight">
            library
          </a>
        </div>
      </div>
      <div className="Links">
        <div className="Link">
          <a href="https://www.linkedin.com/in/jayantwaldia/" target="_blank">
            <img src={linkedin} />
          </a>
        </div>
        <div className="Link">
          <a href="https://github.com/jayantwaldia" target="_blank">
            <img src={github} />
          </a>
        </div>
        <div className="Link">
          <a href="https://twitter.com/jayantwaldia" target="_blank">
            <img src={twitter} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
