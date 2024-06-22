/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      fontFamily:{
        Raleway:["Raleway"],
        sans:["Open Sans",'sans-serif']
      },
      boxShadow: {
        'custom': '0px 0px 10px 1px #eaeaea',
      },
    },
  },
  plugins: [],
}
