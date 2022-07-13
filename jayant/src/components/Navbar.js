import React from "react";
import "../styles/Navbar.css";
import image from "../assets/linkedin.svg";

function Navbar() {
  return (
    <div className="Nav">
      <div className="Pages">
        <div className="Page">
          <a>home</a>
        </div>
        <div className="Page">
          <a>blog</a>
        </div>
        <div className="Page">
          <a>library</a>
        </div>
      </div>
      <div className="Links">
        <div className="Link">
          <a href="https://www.linkedin.com/in/jayantwaldia/">
            <img src={image}></img>
          </a>
        </div>
        <div className="Link"></div>
        <div className="Link"></div>
      </div>
    </div>
  );
}

export default Navbar;
