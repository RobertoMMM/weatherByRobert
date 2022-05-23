module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forDark: "#7f5af0",
        forWhite: "#2cb67d",
        darkThemeBack: "#0f0e17",
        whiteThemeBack: "#fffffe",
        textForDark: "#fffffe",
        textForWhite: "#242629",
      },
      keyframes: {
        toggleAnimation: {
          "0%": {
            transform: "translate(-50%, -50px)",
            opacity: 0,
          },
          "100%": {
            transform: "translate(-50%, 0)",
            opacity: 1,
          },
        },
        formAnimation: {
          "0%": {
            transform: "translate(-50%, -100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(-50%, -50%)",
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
        spinSlow: "spin 3s linear infinite",
        formAnimation: "formAnimation 300ms ",
      },
      fontFamily: {
        sofia: ["Sofia Pro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
