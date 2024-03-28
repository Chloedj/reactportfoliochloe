import React from 'react';
import projectsData from './projectsData';
import Project from './Project';
import './Projects.css';

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Featured Projects</h2>
      <div className="projectContainer">
        {projectsData.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;