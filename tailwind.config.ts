import type { Config } from "tailwindcss"
import tailwindcssAnimate from "tailwindcss-animate";

const config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom banking theme colors
        banking: {
          blue: {
            light: "#EBF5FF",
            DEFAULT: "#3B82F6",
            dark: "#1E40AF",
          },
          purple: {
            light: "#F3E8FF",
            DEFAULT: "#8B5CF6",
            dark: "#5B21B6",
          },
          green: {
            light: "#ECFDF5",
            DEFAULT: "#10B981",
            dark: "#065F46",
          },
          red: {
            light: "#FEF2F2",
            DEFAULT: "#EF4444",
            dark: "#991B1B",
          },
          amber: {
            light: "#FFFBEB",
            DEFAULT: "#F59E0B",
            dark: "#92400E",
          },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "fade-out": {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
        "slide-in-from-top": {
          from: { transform: "translateY(-10%)" },
          to: { transform: "translateY(0)" },
        },
        "slide-in-from-bottom": {
          from: { transform: "translateY(10%)" },
          to: { transform: "translateY(0)" },
        },
        "slide-in-from-left": {
          from: { transform: "translateX(-10%)" },
          to: { transform: "translateX(0)" },
        },
        "slide-in-from-right": {
          from: { transform: "translateX(10%)" },
          to: { transform: "translateX(0)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        blob: {
          "0%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(5%, 5%) scale(1.1)" },
          "66%": { transform: "translate(-5%, 10%) scale(0.9)" },
          "100%": { transform: "translate(0%, -5%) scale(1)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.2s ease-out",
        "fade-out": "fade-out 0.2s ease-out",
        "slide-in-from-top": "slide-in-from-top 0.2s ease-out",
        "slide-in-from-bottom": "slide-in-from-bottom 0.2s ease-out",
        "slide-in-from-left": "slide-in-from-left 0.2s ease-out",
        "slide-in-from-right": "slide-in-from-right 0.2s ease-out",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        blob: "blob 15s infinite alternate ease-in-out",
        float: "float 4s ease-in-out infinite",
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    tailwindcssAnimate,
    
    // Add function to generate CSS variables for the theme
    // @ts-expect-error type error    
    ({ addBase }) => {
      addBase({
        ":root": {
          "--background": "0 0% 100%",
          "--foreground": "222.2 84% 4.9%",
          "--card": "0 0% 100%",
          "--card-foreground": "222.2 84% 4.9%",
          "--popover": "0 0% 100%",
          "--popover-foreground": "222.2 84% 4.9%",
          "--primary": "221.2 83.2% 53.3%",
          "--primary-foreground": "210 40% 98%",
          "--secondary": "210 40% 96.1%",
          "--secondary-foreground": "222.2 47.4% 11.2%",
          "--muted": "210 40% 96.1%",
          "--muted-foreground": "215.4 16.3% 46.9%",
          "--accent": "210 40% 96.1%",
          "--accent-foreground": "222.2 47.4% 11.2%",
          "--destructive": "0 84.2% 60.2%",
          "--destructive-foreground": "210 40% 98%",
          "--border": "214.3 31.8% 91.4%",
          "--input": "214.3 31.8% 91.4%",
          "--ring": "221.2 83.2% 53.3%",
          "--radius": "0.5rem",
        },
        ".dark": {
          "--background": "222.2 84% 4.9%",
          "--foreground": "210 40% 98%",
          "--card": "222.2 84% 4.9%",
          "--card-foreground": "210 40% 98%",
          "--popover": "222.2 84% 4.9%",
          "--popover-foreground": "210 40% 98%",
          "--primary": "217.2 91.2% 59.8%",
          "--primary-foreground": "222.2 47.4% 11.2%",
          "--secondary": "217.2 32.6% 17.5%",
          "--secondary-foreground": "210 40% 98%",
          "--muted": "217.2 32.6% 17.5%",
          "--muted-foreground": "215 20.2% 65.1%",
          "--accent": "217.2 32.6% 17.5%",
          "--accent-foreground": "210 40% 98%",
          "--destructive": "0 62.8% 30.6%",
          "--destructive-foreground": "210 40% 98%",
          "--border": "217.2 32.6% 17.5%",
          "--input": "217.2 32.6% 17.5%",
          "--ring": "224.3 76.3% 48%",
        },
      })
    },
  ],
} satisfies Config

export default config