"use client";

import { motion } from "framer-motion";

export default function Section({
  id,
  index,
  title,
  children,
}) {
  return (
    <section
      id={id}
      className="section"
    >
      <motion.div
        className="section-heading"
        initial={{
          opacity: 0,
          x: -60,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        <span>
          {index}
        </span>

        <h2>
          {title}
        </h2>
      </motion.div>

      <motion.div
        className="section-content"
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.1,
        }}
        transition={{
          duration: 0.9,
          delay: 0.1,
        }}
      >
        {children}
      </motion.div>
    </section>
  );
}
