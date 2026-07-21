import React from "react";
import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <main className="space-y-36">
        <ServicesSection />
        <SkillsSection />
        <ProjectsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
