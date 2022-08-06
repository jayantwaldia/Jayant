import { projectsList } from "../data/projectsList";
import Card from "../shared/Card";

function Project() {
  const listItems = projectsList.map((project) => (
    <Card key={project.id}>
      <img src={project.thumbnail} alt={project.name} />
      <p>
        <b>{project.name}</b>
        {" " + project.desc + " "}
      </p>
    </Card>
  ));

  return <div className="ProjectGrid">{listItems}</div>;
}

export default function Projects() {
  return (
    <div className="Projects">
      <p className="Title">▶ Projects</p>
      <p className="Decription">
        Find below some interesting projects that I have worked upon
      </p>
      <Project />
    </div>
  );
}
