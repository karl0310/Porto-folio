export default function ProjectCard({
  numero,
  titre,
  description,
  technologies,
  github,
  live,
}) {
  return (
    <article className="project-card">

      <div className="project-top">

        <span>
          {numero}
        </span>

        <span>
          PROJET WEB
        </span>

      </div>

      <div className="project-preview">
        <span>
          Aperçu du projet
        </span>
      </div>

      <h3>
        {titre}
      </h3>

      <p>
        {description}
      </p>

      <div className="tags">

        {technologies.map((technologie) => (
          <span key={technologie}>
            {technologie}
          </span>
        ))}

      </div>

      <div className="project-links">

        <a
          href={github}
          target="_blank"
          rel="noreferrer"
        >
          GitHub ↗
        </a>

        <a
          href={live}
          target="_blank"
          rel="noreferrer"
        >
          Projet en ligne ↗
        </a>

      </div>

    </article>
  );
}
