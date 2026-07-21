import React, { useEffect } from "react";

const CustomCursor = () => {
  useEffect(() => {
    // Minimal custom cursor: hide on mobile
    const el = document.documentElement;
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) {
      el.classList.remove('cursor-hidden');
      return;
    }
    el.classList.add('cursor-hidden');
    return () => el.classList.remove('cursor-hidden');
  }, []);

  return null;
};

export default CustomCursor;
