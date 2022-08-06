import { projectData } from "../data/projectData";

function Project() {
  const listItems = projectData.map((aboutProject) => (
    <div key={aboutProject.id} className="Project">
      <img src={aboutProject.thumbnail} alt={aboutProject.name} />
      <p>
        <b>{aboutProject.name}</b>
        {" " + aboutProject.desc + " "}
      </p>
    </div>
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
