export default function ProjectCard({
  numero,
  titre,
  statut,
  description,
  technologies,
  github,
  live,
}) {
  const projetDisponible = live && live !== "#";
  const githubDisponible = github && github !== "#";

  return (
    <article className="project-card">

      <div className="project-top">

        <span>
          {numero}
        </span>

        <span className="project-status">
          {statut}
        </span>

      </div>

      <div className="project-preview">

        <span>
          {titre}
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

        {githubDisponible && (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        )}

        {projetDisponible && (
          <a
            href={live}
            target="_blank"
            rel="noreferrer"
          >
            Voir le projet ↗
          </a>
        )}

      </div>

    </article>
  );
}
