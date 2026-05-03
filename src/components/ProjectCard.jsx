import React from 'react';
import './ProjectCard.css';

function ProjectCard(props) {
  var project = props.project;

  return (
    <div className="card">
      <span className="badge">{project.category}</span>
      <h3 className="card-title">{project.title}</h3>
      <p className="card-desc">{project.description}</p>
      <div className="card-footer">
        <p className="card-year">Year: {project.year}</p>
        {project.link && (
          <a
            className="card-link"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project →
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
