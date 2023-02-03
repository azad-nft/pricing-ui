/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      colors: {
        violet: {
          500: "#6B46C1",
        },
        // violet:'hsla(258, 50%, 52%, 1)' 

      },
    },
  },


  plugins: [],
}