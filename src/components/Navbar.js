import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

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
          <div className="Link">
            <a
              href={"https://www.linkedin.com/in/jayantwaldia/"}
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={24} color="white" />
            </a>
          </div>
          <div className="Link">
            <a
              href={"https://github.com/jayantwaldia"}
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={24} color="white" />
            </a>
          </div>
          <div className="Link">
            <a
              href={"https://twitter.com/jayantwaldia"}
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter size={24} color="white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
