module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FBBD23",
          secondary: "#F87272",
          accent: "#3ABFF8",
          neutral: "#3d4451",
          "base-100": "#36D399",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
};
