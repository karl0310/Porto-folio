import React, { useEffect, useState } from "react";

/**
 * TextTyper: effet machine à écrire cyclique
 * Props: words: string[], typeSpeed, deleteSpeed, pause
 */
type Props = {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  pause?: number;
  className?: string;
};

const TextTyper: React.FC<Props> = ({ words, typeSpeed = 80, deleteSpeed = 40, pause = 1600, className }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setBlink((b) => !b);
    }, 600);
    return () => clearTimeout(timeout);
  }, [blink]);

  useEffect(() => {
    if (index >= words.length) {
      setIndex(0);
      return;
    }

    if (!deleting && subIndex === words[index].length + 1) {
      // pause before deleting
      setTimeout(() => setDeleting(true), pause);
      return;
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }

    const speed = deleting ? deleteSpeed : typeSpeed;
    const timer = setTimeout(() => {
      setSubIndex((s) => s + (deleting ? -1 : 1));
    }, speed);

    return () => clearTimeout(timer);
  }, [subIndex, index, deleting, words, typeSpeed, deleteSpeed, pause]);

  return (
    <span className={(className || "") + " whitespace-nowrap"}>
      {words[index].substring(0, Math.max(0, subIndex))}
      <span className={`ml-1 inline-block w-1 ${blink ? "bg-electric" : "bg-transparent"} h-4 align-middle`} />
    </span>
  );
};

export default TextTyper;
