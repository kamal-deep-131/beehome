/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:
    {
      colors: {
        textColor: "#0A172Aff",
        blueBg: "#F1F4F8ff",
        mainColor: "#F0B212ff",
        myBg: "#F1F4F9ff",
      }
    }

  },


  plugins: [require('daisyui')],
}

