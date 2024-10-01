import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bluishPurple: '#6B3CC9', // Primary Color
        yuzuJam: '#F28D35',      // Secondary Color
        iceIceBaby: '#6A44F2',   // Analogous Color 1
        richBlue: '#1CBDDD',     // Analogous Color 2
        electricIndigo: '#52378C', // Triadic Color 1
        interstellarBlue: '#4DCA79', // Dark Color
        tricornBlack: '#2F2F2F', // Text Color
        acierLight: '#545A75',   // Text Color Light
        acierSubtle: '#9C9991',  // Text Color Subtle
        wizardWhite: '#E2F2FE',  // Accent Color 1
        cuddlyYarn: '#FFF8E0',   // Accent Color 2
        hornetSting: '#FF0335',  // Error Color
        frog: '#5EB30B',         // Success Color
      },
      screens: {
        '1440px': '1440px', // Custom breakpoint for 1440px
      },
    },
  },
  plugins: [
    function ({ addComponents }: any) {
      addComponents({
        '.containers': {
          maxWidth: '1280px',
          width: '91.666667%',
          marginLeft: 'auto',
          marginRight: 'auto',
        },
        '.containers-1440': {
          maxWidth: '1064px', // You can change this based on your requirements
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
        },
      });
    },
  ],
};

export default config;
