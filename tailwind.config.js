/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "custom-new-blue": "#0582ca",
        "color-inf":"#D7F1F5",
        "col-1":"#EAECF4",
        "col-2":"#FCEEC9"
      } ,
     },

  },
  plugins: [],
}

