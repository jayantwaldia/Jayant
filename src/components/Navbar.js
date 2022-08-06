import { Link, NavLink } from "react-router-dom";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import twitter from "../assets/twitter.svg";
import BlogPage from "../pages/BlogPage";

function Page({ name, source, id }) {
  return (
    <div className="Page">
      <NavLink
        to={source}
        className={({ isActive }) =>
          "nav-link" + (isActive ? " activated" : "")
        }
      >
        {name}
      </NavLink>
    </div>
  );
}

function Social({ name, href, imageSrc }) {
  return (
    <div className="Link">
      <a href={href} target="_blank" rel="noreferrer">
        <img src={imageSrc} alt={name} />
      </a>
    </div>
  );
}

export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="Nav">
        <div className="Pages">
          <Page name={"home"} source={"/"} />
          <Page name={"blog"} source={"/blog"} />
          <Page name={"about"} source={"/about"} />
        </div>
        <div className="Links">
          <Social
            name={"Jayant's LinkedIn"}
            href={"https://www.linkedin.com/in/jayantwaldia/"}
            imageSrc={linkedin}
          />
          <Social
            name={"Jayant's Github"}
            href={"https://github.com/jayantwaldia/"}
            imageSrc={github}
          />
          <Social
            name={"Jayant's Twitter"}
            href={"https://twitter.com/jayantwaldia"}
            imageSrc={twitter}
          />
        </div>
      </div>
    </div>
  );
}
