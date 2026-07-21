import React from "react";
import { SITE } from "../data/portfolio";

const ContactSection = () => {
  return (
    <section id="contact" className="container mx-auto px-6">
      <h3 className="text-3xl font-semibold mb-8">Contact</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card p-6 rounded-2xl">
          <h4 className="text-xl font-medium mb-4">Coordonnées</h4>
          <p className="text-gray-300">Email: {SITE.contact.email}</p>
          <p className="text-gray-300">WhatsApp: {SITE.contact.whatsapp}</p>
          <div className="mt-4 flex gap-3">
            <a href={SITE.contact.github} className="btn-outline px-4 py-2 rounded-lg">GitHub</a>
            <a href={SITE.contact.linkedin} className="btn-outline px-4 py-2 rounded-lg">LinkedIn</a>
          </div>
        </div>
        <div className="card p-6 rounded-2xl">
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Formulaire envoyé (placeholder)'); }}>
            <div>
              <label className="block text-sm text-gray-300">Nom</label>
              <input className="mt-1 w-full p-3 rounded-lg bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.04)]" placeholder="Votre nom" required />
            </div>
            <div>
              <label className="block text-sm text-gray-300">Email</label>
              <input type="email" className="mt-1 w-full p-3 rounded-lg bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.04)]" placeholder="votre@email.com" required />
            </div>
            <div>
              <label className="block text-sm text-gray-300">Sujet</label>
              <input className="mt-1 w-full p-3 rounded-lg bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.04)]" placeholder="Sujet" />
            </div>
            <div>
              <label className="block text-sm text-gray-300">Message</label>
              <textarea className="mt-1 w-full p-3 rounded-lg bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.04)]" placeholder="Votre message" rows={5} required />
            </div>
            <div>
              <button type="submit" className="btn-primary px-6 py-3 rounded-lg glow">Envoyer</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
