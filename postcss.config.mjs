const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;

// “Tailwind used to require a config file, but in the latest version, it works automatically in Next.js.
// Next.js loads Tailwind through PostCSS, and Tailwind auto-detects every component and page.
// That’s why we don’t need a tailwind.config.js anymore.”


// When DO You Need tailwind.config.js?

// Only if you want:

// ✔ Custom colors
// ✔ Custom spacing
// ✔ Custom breakpoints
// ✔ Plugins
// ✔ Typography plugin
// ✔ Forms plugin
// ✔ Animations
// ✔ Complex themes

// For student-level projects: not required.