import React from 'react';
import ProjectCard from './ProjectCard';
import './ProjectList.css';

function ProjectList(props) {
  if (props.projects.length === 0) {
    return <p className="no-results">No projects found. Try a different search.</p>;
  }

  return (
    <div className="project-grid">
      {props.projects.map(function (project) {
        return <ProjectCard key={project.id} project={project} />;
      })}
    </div>
  );
}

export default ProjectList;
