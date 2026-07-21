import React from "react";
import { SITE, JOBS } from "../data/portfolio";
import TextTyper from "./TextTyper";
import { motion } from "framer-motion";
import ThreeScene from "./ThreeScene";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2">
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y:0, opacity: 1 }} transition={{delay:0.2}} className="text-4xl md:text-6xl font-bold leading-tight">
            {SITE.name}
          </motion.h1>
          <motion.h2 initial={{ y: 20, opacity: 0 }} animate={{ y:0, opacity: 1 }} transition={{delay:0.4}} className="mt-4 text-xl md:text-2xl font-medium text-gray-300">
            {SITE.title}
          </motion.h2>
          <div className="mt-6 text-lg md:text-xl text-cyanish">
            <TextTyper words={JOBS} />
          </div>
          <p className="mt-6 text-gray-400 max-w-xl">{SITE.subtitle}</p>

          <div className="mt-8 flex gap-4">
            <a className="btn-primary card px-6 py-3 rounded-lg glow" href={SITE.contact.github} target="_blank" rel="noreferrer">Voir mon GitHub</a>
            <a className="btn-outline card px-6 py-3 rounded-lg" href="#contact">Contact</a>
          </div>
        </div>

        <div className="w-full md:w-1/2 h-[420px]">
          <div className="card rounded-2xl overflow-hidden w-full h-full relative">
            <ThreeScene />
            <div className="absolute inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
