module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
       'base': '1rem',
       'lg': '1.125rem',
       'xl': '1.25rem',
       '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
       '5xl': '3rem',
       '6xl': '4rem',
      '7xl': '5rem',
     },
    screens: {
      '2xl': { max: '1536px' },
      xl: { max: '1280px' },
      lg: { max: '1024px' },
      md: { max: '768px' },
      sm: { max: '640px' },
    },
    fontFamily: {
      oswald: ['Oswald', 'sans-serif'],
      libre: ['Libre\\ Franklin', 'sans-serif'],
    },
    extend: {
      gridTemplateColumns: {
        // Complex site-specific column configuration
       'testimonials': '450px 100px 1fr',
       'testimonials-design-2': '1fr 4fr',
      },
      colors: {
        green: '#25DD7E',
        black: '#191919',
        grey: '#86898F',
        smoke: '#F2F2F5',
        dark: '#252E3D'
      },
      spacing: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '48px',
      },
      scale: {
        0: '0',
        25: '.25',
        50: '.5',
        75: '.75',
        90: '.9',
        95: '.95',
        100: '1',
        105: '1.05',
        110: '1.1',
        125: '1.25',
        150: '1.5',
        200: '2',
        'mirrorx': '-1, 1'
      },
      width: {
        '1/24': '4.1666667%',
        '2/24': '8.3333333%',
        '3/24': '12.5%',
        '4/24': '16.6666667%',
        '5/24': '20.833333333%',
        '6/24': '25%',
        '7/24': '29.166666667%',
        '8/24': '33.333333333%',
        '9/24': '37.5%',
        '10/24': '41.666666667%',
        '11/24': '45.833333333%',
        '12/24': '50%',
        '13/24': '54.166666667%',
        '14/24': '58.333333333%',
        '15/24': '62.5%',
        '16/24': '66.666666667%',
        '17/24': '70.833333333%',
        '18/24': '75%',
        '19/24': '79.166666667%',
        '20/24': '83.333333333%',
        '21/24': '87.5%',
        '22/24': '91.666666667%',
        '23/24': '95.833333333%',
        '24/24': '100%',
      },
      maxWidth: {
        '2xs': '16rem',
        '90per': '90%',
      },
      skew: {
        15: '15deg',
        20: '20deg',
        25: '25deg',
        '-15': '-15deg',
        '-20': '-20deg',
        '-25': '-25deg',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    ({ addComponents }) => {
      addComponents({
        '.container': {
          width: '100%',
          maxWidth: '1150px',
          padding: '0 2rem',
          '@screen lg': {
            padding: '0 3rem',
          },
          '@screen md': {
            padding: '0 1.5rem',
          },
          '@screen sm': {
            padding: '0 1rem',
          },
        },
      });
    },
  ],
}
