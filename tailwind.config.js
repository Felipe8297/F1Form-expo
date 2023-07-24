/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.tsx', './app/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        regular_kanit: 'Kanit_400Regular',
        semibold_kanit: 'Kanit_600SemiBold',
        bold_kanit: 'Kanit_700Bold',

        regular_titillium: 'TitilliumWeb_400Regular',
        semibold_titillium: 'TitilliumWeb_600SemiBold',
        bold_titillium: 'TitilliumWeb_700Bold',
      },
      colors: {
        gray: {
          50: '#eaeaea',
          100: '#bebebf',
          200: '#9e9ea0',
          300: '#727275',
          400: '#56565a',
          500: '#2c2c31',
          600: '#28282d',
          700: '#1f1f23',
          800: '#18181b',
          900: '#121215',
        },

        red_800: '#E53211',

        blue_800: '#04161C',

        green: {
          50: '#e6fbef',
          100: '#b1f1ce',
          200: '#8cebb6',
          300: '#57e295',
          400: '#36dc81',
          500: '#04d361',
          600: '#04c058',
          700: '#039645',
          800: '#027435',
          900: '#025929',
        },
      },
    },
  },
  plugins: [],
}
