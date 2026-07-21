module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        electric: "#00e6ff",
        cyanish: "#4de0c6",
        violet: "#7c4dff",
        glass: "rgba(255,255,255,0.06)"
      },
      boxShadow: {
        "neo": "0 8px 30px rgba(124,77,255,0.12), 0 2px 6px rgba(0,0,0,0.6)"
      }
    }
  },
  plugins: []
};
