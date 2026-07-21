import React from "react";

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="container mx-auto px-6">
      <h3 className="text-3xl font-semibold mb-8">Témoignages</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card p-6 rounded-2xl">
          <p className="text-gray-300">"Excellent travail, délai respecté et très professionnel."</p>
          <div className="mt-4 font-medium">Client Exemple</div>
        </div>
        <div className="card p-6 rounded-2xl">
          <p className="text-gray-300">"Solution sur mesure, communication fluide."</p>
          <div className="mt-4 font-medium">Client Exemple</div>
        </div>
        <div className="card p-6 rounded-2xl">
          <p className="text-gray-300">"Installation des caméras parfaite et configuration réseau optimisée."</p>
          <div className="mt-4 font-medium">Client Exemple</div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
