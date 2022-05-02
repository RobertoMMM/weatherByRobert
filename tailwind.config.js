module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        toggleAnimation: {
          "0%": {
            transform: "translateY(-50px)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
        spinSun: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        moonPulse: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(-30deg)",
          },
        },
      },
      animation: {
        spinSun: "spinSun 500ms ease-in-out",
        moonPulse: "moonPulse 500ms ease-in-out",
        toggleAnimation: "toggleAnimation 500ms ease-in-out",
      },
    },
  },
  plugins: [],
};
