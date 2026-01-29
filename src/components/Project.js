import React from 'react';
import '../styles/Project.css';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

function Project({ project }) {
  const hasDeployed = Boolean(project.deployed);
  const hasGithub = Boolean(project.github);

  return (
    <div className="project-card">
      <div className="image-container" tabIndex={0} aria-label={project.title}>
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
        />

        <div className="overlay" aria-hidden="true">
          <div className="overlay-inner">
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            {(hasDeployed || hasGithub) && (
              <div className="links">
                {hasDeployed && (
                  <a
                    href={project.deployed}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.title}`}
                    title="Open"
                  >
                    <FiExternalLink size={20} />
                  </a>
                )}
                {hasGithub && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    title="GitHub"
                  >
                    <FiGithub size={20} />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
