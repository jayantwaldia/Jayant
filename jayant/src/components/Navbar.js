import React from "react";
import "../styles/Navbar.css";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import twitter from "../assets/twitter.svg";

function Page({ name, source, id }) {
  return (
    <div className="Page">
      <a href={source} id={id} className="Home">
        {name}
      </a>
    </div>
  );
}

function Link({ name, href, imageSrc }) {
  return (
    <div className="Link">
      <a href={href} target="_blank">
        <img src={imageSrc} alt={name} />
      </a>
    </div>
  );
}

export default function Navbar() {
  return (
    <div>
      <div className="Nav">
        <div className="Pages">
          <Page name={"home"} source={"#home"} id={"highlight"} />
          <Page name={"blog"} source={"#blog"} id={"highlight"} />
          <Page name={"library"} source={"#library"} id={"highlight"} />
        </div>
        <div className="Links">
          <Link
            name={"Jayant's LinkedIn"}
            href={"https://www.linkedin.com/in/jayantwaldia/"}
            imageSrc={linkedin}
          />
          <Link
            name={"Jayant's Github"}
            href={"https://github.com/jayantwaldia/"}
            imageSrc={github}
          />
          <Link
            name={"Jayant's Twitter"}
            href={"https://twitter.com/jayantwaldia"}
            imageSrc={twitter}
          />
        </div>
      </div>
    </div>
  );
}
