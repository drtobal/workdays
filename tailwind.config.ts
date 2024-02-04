import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
  safelist: [
    'w-6',
    'h-6',
    'flex',
    'justify-center',
    'items-center',
    'rounded-full',
    'text-slate-400',
    'bg-slate-400',
    'bg-slate-300',
    'text-white',
    'border-slate-300',
    'border-slate-400',
    'border-green-500',
    'border-2',
  ],
};
export default config;
