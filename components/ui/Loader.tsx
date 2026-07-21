import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-50">
      {/* Simple loader placeholder, can be animated with GSAP */}
      <div className="w-16 h-16 rounded-full border-4 border-t-4 border-[rgba(255,255,255,0.06)] border-t-electric animate-spin" />
    </div>
  );
};

export default Loader;
