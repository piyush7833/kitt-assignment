import type { Config } from "tailwindcss";
import { CSSRuleObject } from "tailwindcss/types/config";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      scrollbarHide: {
        'hideScrollBar': {
          '::-webkit-scrollbar': {
            display: 'none',
          },
          '-ms-overflow-style': 'none', /* IE and Edge */
          'scrollbar-width': 'none' /* Firefox */
        },
      },
    },
  },
  plugins: [
    function({ addUtilities }: { addUtilities: (utilities: CSSRuleObject | CSSRuleObject[], options?: Partial<{ respectPrefix: boolean; respectImportant: boolean }>) => void }) {
      const newUtilities = {
        '.hideScrollBar': {
          '::-webkit-scrollbar': {
            display: 'none',
          },
          '-ms-overflow-style': 'none', /* IE and Edge */
          'scrollbar-width': 'none', /* Firefox */
        },
      }
      addUtilities(newUtilities)
    }
  ]
};
export default config;
