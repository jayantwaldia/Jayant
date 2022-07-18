import React, { Fragment } from "react";
import "../styles/Projects.css";
import { projectData } from "../data/projectData";

function Project() {
  const listItems = projectData.map((aboutProject) => (
    <li key={aboutProject.id}>
      <img src={aboutProject.thumbnail} alt={aboutProject.name} />
      <p>
        <b>{aboutProject.name}</b>
        {" " + aboutProject.desc + " "}
      </p>
    </li>
  ));

  return <ul>{listItems}</ul>;
}

export default function Projects() {
  return (
    <div className="Projects">
      <p className="Title">▶ Projects</p>
      <p className="Decription">
        Find below some valuable projects that I worked on
      </p>
      <div className="Project">
        <Project />
      </div>
    </div>
  );
}
