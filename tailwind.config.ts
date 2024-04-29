import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-circular)"],
        // manrope: ['"Manrope", sans-serif'],
      },
      maxWidth: {
        "max-width": "1200px",
      },
      colors: {
        primary: {
          DEFAULT: "#001233",
          lightBlue: "#0466C8",
          gray: "#707480",
        },
      },
    },
  },
  plugins: [],
};
export default config;
