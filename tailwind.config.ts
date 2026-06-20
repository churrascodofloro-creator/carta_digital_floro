import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "inverse-surface": "#e9e1db",
        "outline": "#a98a83",
        "primary-fixed-dim": "#ffb4a3",
        "tertiary": "#d6c4a5",
        "on-primary-fixed-variant": "#8b1a00",
        "surface-variant": "#383430",
        "secondary-fixed": "#ffddb7",
        "surface-dim": "#161310",
        "on-surface": "#e9e1db",
        "surface-container": "#221f1b",
        "surface-container-low": "#1e1b17",
        "surface-bright": "#3d3834",
        "tertiary-container": "#64573e",
        "surface-container-highest": "#383430",
        "tertiary-fixed": "#f3e0c0",
        "tertiary-fixed-dim": "#d6c4a5",
        "surface-container-lowest": "#100e0a",
        "on-secondary-fixed-variant": "#653e00",
        "on-secondary-fixed": "#2a1700",
        "on-error": "#690005",
        "secondary": "#ffb95c",
        "error-container": "#93000a",
        "on-secondary-container": "#3d2400",
        "inverse-primary": "#b02e0f",
        "on-surface-variant": "#e2bfb7",
        "primary-fixed": "#ffdad2",
        "on-background": "#e9e1db",
        "primary": "#ffb4a3",
        "on-primary-container": "#ffc1b3",
        "primary-container": "#a82808",
        "on-tertiary-fixed": "#231a07",
        "on-primary-fixed": "#3d0600",
        "on-tertiary-container": "#dfceae",
        "on-error-container": "#ffdad6",
        "surface": "#161310",
        "on-tertiary": "#392f19",
        "secondary-fixed-dim": "#ffb95c",
        "surface-tint": "#ffb4a3",
        "outline-variant": "#5a413b",
        "background": "#161310",
        "surface-container-high": "#2d2926",
        "error": "#ffb4ab",
        "on-tertiary-fixed-variant": "#51452e",
        "secondary-container": "#c68218",
        "inverse-on-surface": "#34302c",
        "on-primary": "#621000",
        "on-secondary": "#462a00"
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      spacing: {
        "base": "8px",
        "md": "24px",
        "lg": "48px",
        "xl": "80px",
        "margin-mobile": "20px",
        "gutter": "24px",
        "sm": "12px",
        "xs": "4px",
        "margin-desktop": "64px"
      },
      fontFamily: {
        "headline-lg-mobile": ["var(--font-playfair)", "serif"],
        "body-md": ["var(--font-inter)", "sans-serif"],
        "price-display": ["var(--font-playfair)", "serif"],
        "headline-lg": ["var(--font-playfair)", "serif"],
        "headline-xl": ["var(--font-playfair)", "serif"],
        "label-md": ["var(--font-inter)", "sans-serif"],
        "headline-md": ["var(--font-playfair)", "serif"],
        "body-lg": ["var(--font-inter)", "sans-serif"]
      },
      fontSize: {
        "headline-lg-mobile": ["28px", { "lineHeight": "1.3", "fontWeight": "600" }],
        "body-md": ["16px", { "lineHeight": "1.6", "fontWeight": "400" }],
        "price-display": ["20px", { "lineHeight": "1.0", "fontWeight": "700" }],
        "headline-lg": ["32px", { "lineHeight": "1.3", "fontWeight": "600" }],
        "headline-xl": ["48px", { "lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "700" }],
        "label-md": ["14px", { "lineHeight": "1.2", "letterSpacing": "0.05em", "fontWeight": "600" }],
        "headline-md": ["24px", { "lineHeight": "1.4", "fontWeight": "600" }],
        "body-lg": ["18px", { "lineHeight": "1.6", "fontWeight": "400" }]
      }
    }
  }
};

export default config;
