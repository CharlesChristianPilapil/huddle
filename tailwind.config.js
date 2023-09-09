/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '992px',
      xl: '1440px'
    },

    extend: {
      colors: {
        Pink: 'hsl(322, 100%, 66%)',
        LightPink: 'hsl(321, 100%, 78%)',
        LightRed: 'hsl(0, 100%, 63%)',
        VeryDarkCyan: 'hsl(192, 100%, 9%)',
        VeryPaleBlue: 'hsl(207, 100%, 98%)'
      },
      fontFamily: {
        Poppins: 'Poppins',
        OpenSans: 'Open Sans'
      },

      fontWeight: {
        thin: '100',
        hairline: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900'
      }


    },
  },
  plugins: [],
}

