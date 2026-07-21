import React from "react";
import { SKILLS } from "../data/portfolio";

const SkillsSection = () => {
  return (
    <section id="skills" className="container mx-auto px-6">
      <h3 className="text-3xl font-semibold mb-8">Compétences</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SKILLS.map((s) => (
          <div key={s} className="card p-4 rounded-xl flex items-center justify-between">
            <div className="font-medium">{s}</div>
            <div className="w-1/2 bg-[rgba(255,255,255,0.04)] h-3 rounded-full overflow-hidden">
              <div className="h-3 rounded-full" style={{ width: `${Math.floor(50 + Math.random()*50)}%`, background: 'linear-gradient(90deg,#00e6ff,#7c4dff)' }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
