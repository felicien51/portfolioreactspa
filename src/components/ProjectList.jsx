import React from 'react';
import ProjectCard from './ProjectCard';
import './ProjectList.css';

function ProjectList({ projects, onDelete }) {
  if (projects.length === 0) {
    return <p className="no-results">No projects found. Try a different search.</p>;
  }

  return (
    <div className="project-grid">
      {projects.map(function (project) {
        return (
          <ProjectCard
            key={project.id}
            project={project}
            onDelete={onDelete}
          />
        );
      })}
    </div>
  );
}

export default ProjectList;