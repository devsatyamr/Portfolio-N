/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {screens: {
    'sm': '640px',
    // => @media (min-width: 640px) { ... }

    'md': '768px',
    // => @media (min-width: 768px) { ... }

    'lg': '1024px',
    // => @media (min-width: 1024px) { ... }

    'xl': '1280px',
    // => @media (min-width: 1280px) { ... }

    '2xl': '1536px',
    // => @media (min-width: 1536px) { ... }
    'custom':'-640px',
  },
    
    extend: { animation: {
      cursor: 'cursor .6s linear infinite alternate',
      type: 'type 1.8s ease-out .8s 1 normal both',
      'type-reverse': 'type 1.8s ease-out 0s infinite alternate-reverse both',
    },
    keyframes: {
      type: {
        '0%': { width: '0ch' },
        '5%, 10%': { width: '1ch' },
        '15%, 20%': { width: '2ch' },
        '25%, 30%': { width: '3ch' },
        '35%, 40%': { width: '4ch' },
        '45%, 50%': { width: '5ch' },
        '55%, 60%': { width: '6ch' },
        '65%, 70%': { width: '7ch' },
        '75%, 80%': { width: '8ch' },
        '85%, 90%': { width: '9ch' },
        '95%': { width: '10ch' },
      },
    },
    
      rotate: {
        '17': '-17deg',
      }
    },
    fontFamily: {
      signature: ["Great Vibes"],
    }
  },
  plugins: [],
}

