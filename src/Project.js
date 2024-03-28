import React from 'react';

function Project({ title, description, imageUrl, link, technologies }) {
  return (
    <div className="project">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={imageUrl} alt={title} />
      </a>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="social-icons">
        {technologies.map((tech) => (
          <i key={tech} className={`fa-brands ${tech}`}></i>
        ))}
      </div>
    </div>
  );
}

export default Project;
