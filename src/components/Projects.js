import { projectsList } from "../data/projectsList";
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
      <p>{project.stack}</p>
    </Card>
  ));

  return <div className="ProjectGrid">{listItems}</div>;
}

export default function Projects() {
  return (
    <div className="Projects">
      <p className="Title">Projects</p>
      <p className="Decription">
        Find below some interesting projects that I have worked upon
      </p>
      <Project />
    </div>
  );
}
