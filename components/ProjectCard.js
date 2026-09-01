"use client";

import { motion } from "framer-motion";

export default function ProjectCard({
  numero,
  titre,
  statut,
  description,
  technologies,
  github,
  live,
}) {
  const projetDisponible =
    live && live !== "#";

  const githubDisponible =
    github && github !== "#";

  return (
    <motion.article
      className="project-card"

      initial={{
        opacity: 0,
        y: 80,
      }}

      whileInView={{
        opacity: 1,
        y: 0,
      }}

      viewport={{
        once: true,
        amount: 0.15,
      }}

      whileHover={{
        y: -12,
      }}

      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
    >

      <div className="project-top">

        <span>
          {numero}
        </span>

        <span className="project-status">
          {statut}
        </span>

      </div>

      <motion.div
        className="project-preview"

        whileHover={{
          scale: 1.02,
        }}

        transition={{
          duration: 0.4,
        }}
      >

        <div className="project-orb" />

        <span>
          {titre}
        </span>

      </motion.div>

      <h3>
        {titre}
      </h3>

      <p>
        {description}
      </p>

      <div className="tags">

        {technologies.map(
          (technologie) => (
            <span key={technologie}>
              {technologie}
            </span>
          )
        )}

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

    </motion.article>
  );
}
