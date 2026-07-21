import React from "react";

const ServicesSection = () => {
  return (
    <section id="services" className="container mx-auto px-6">
      <h3 className="text-3xl font-semibold mb-8">Mes services</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Placeholder cards: replace with dynamic map from data/SERVICES */}
        <div className="card p-6 rounded-2xl">
          <h4 className="text-xl font-medium mb-4">Développement Web</h4>
          <ul className="text-gray-300 space-y-2">
            <li>Sites vitrines</li>
            <li>Applications Web</li>
            <li>Plateformes sur mesure</li>
          </ul>
        </div>
        <div className="card p-6 rounded-2xl">
          <h4 className="text-xl font-medium mb-4">Maintenance informatique</h4>
          <ul className="text-gray-300 space-y-2">
            <li>Maintenance préventive</li>
            <li>Maintenance corrective</li>
            <li>Assistance technique</li>
          </ul>
        </div>
        <div className="card p-6 rounded-2xl">
          <h4 className="text-xl font-medium mb-4">Installation systèmes de sécurité</h4>
          <ul className="text-gray-300 space-y-2">
            <li>Caméras de surveillance</li>
            <li>Vidéosurveillance IP</li>
            <li>Contrôle d'accès</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
