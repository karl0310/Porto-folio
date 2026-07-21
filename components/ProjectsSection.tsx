import React from "react";
import { PROJECTS } from "../data/portfolio";

const ProjectsSection = () => {
  return (
    <section id="projects" className="container mx-auto px-6">
      <h3 className="text-3xl font-semibold mb-8">Mes réalisations</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PROJECTS.map((p) => (
          <div key={p.id} className="card rounded-2xl overflow-hidden">
            <div className="h-48 bg-gray-800 flex items-center justify-center">{/* image placeholder */}
              <img src={p.image} alt={p.title} className="object-cover w-full h-full" />
            </div>
            <div className="p-4">
              <h4 className="text-xl font-medium">{p.title}</h4>
              <p className="text-gray-300 text-sm mt-2">{p.description}</p>
              <div className="mt-4 flex gap-2">
                <a href={p.demo} className="btn-outline px-4 py-2 rounded-lg">Voir le projet</a>
                <a href={p.repo} className="btn-primary px-4 py-2 rounded-lg glow">Code source</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
