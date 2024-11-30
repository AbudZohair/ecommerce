import plugin from "tailwindcss/plugin";

import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {},
  },
  plugins: [
    plugin(({ addComponents }) => {
      addComponents({
        ".h1": {
          fontSize: "29px",
          lineHeight: "40px",
          "@screen sm": {
            fontSize: "48px",
            lineHeight: "64px",
          },
        },
        ".h2": {
          fontSize: "26px",
          lineHeight: "32px",
          "@screen sm": {
            fontSize: "39px",
            lineHeight: "48px",
          },
        },
        ".h3": {
          fontSize: "23px",
          lineHeight: "32px",
          "@screen sm": {
            fontSize: "31px",
            lineHeight: "40px",
          },
        },
        ".h4": {
          fontSize: "20px",
          lineHeight: "24px",

          "@screen sm": {
            fontSize: "25px",
            lineHeight: "32px",
          },
        },
        ".h5": {
          fontSize: "18px",
          lineHeight: "24px",
          "@screen sm": {
            fontSize: "20px",
            lineHeight: "24px",
          },
        },
        ".p": {
          fontSize: "16px",
          lineHeight: "24px",
        },
        ".label": {
          fontSize: "14px",
          lineHeight: "20px",
          "@screen sm": {
            fontSize: "13px",
            lineHeight: "16px",
          },
        },
        ".tiny": {
          fontSize: "13px",
          lineHeight: "16px",
          "@screen sm": {
            fontSize: "10px",
            lineHeight: "12px",
          },
        },
      });
    }),
  ],
} satisfies Config;
