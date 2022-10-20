import { projectsList } from "../data/projectsList";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Card from "../shared/Card";

function Project() {
  const listItems = projectsList.map((project) => (
    <Card key={project.id}>
      <div>
        <img src={project.image} alt={project.name} />
        <p>
          <h3>{project.name}</h3>
          {" " + project.desc + " "}
        </p>
      </div>
      <hr></hr>
      <p style={{ color: "gray" }}>{project.stack}</p>
      <div className="project-link">
        <a href={project.live} target="_blank" rel="noreferrer">
          <FaExternalLinkAlt color="white" />
        </a>
        <a href={project.link} target="_blank" rel="noreferrer">
          <FaGithub size={20} color="white" />
        </a>
      </div>
    </Card>
  ));

  return <div className="ProjectGrid">{listItems}</div>;
}

export default function Projects() {
  return (
    <div className="Projects">
      <p className="Title">Software</p>
      <p className="Decription">
        Find below some interesting projects that I have worked upon
      </p>
      <Project />
    </div>
  );
}
