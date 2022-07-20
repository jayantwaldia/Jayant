import React, { Fragment } from "react";
import "../styles/Projects.css";
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
        Find below some valuable projects that I worked on
      </p>
      <Project />
    </div>
  );
}
