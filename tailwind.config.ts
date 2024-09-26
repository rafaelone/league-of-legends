import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      screens: {
        xl: { max: '1620px' },
        lg: { max: '1440px' }, // Desktop
        md: { max: '1024px' }, // Tablet
        sm: { max: '769px' },
      },
      colors: {
        red: {
          100: '#d13639',

          200: '#fd0352',
          300: '#400A12',
        },

        white: {
          100: '#fff',
          200: '#F5F5F5',
        },
        blue: {
          100: '#CDFAFA',
          200: '#0AC8B9',
          300: '#0397AB',
          400: '#005A82',
          500: '#0A323C',
          600: '#091428',
          700: '#0A1428',
        },
        gold: {
          100: '#F0E6D2',
          200: '#C8AA6E',
          300: '#C8AA6E',
          400: '#C89B3C',
          500: '#785A28',
          600: '#463714',
          700: '#32281E',
        },
        grey: {
          100: '#A09B8C',
          200: '#5B5A56',
          300: '#3C3C41',
          400: '#1E2328',
          500: '#1E282D',
          600: '#010A13',
        },

        dark: {
          100: '#000000',
        },
      },
      backgroundImage: {
        'sign-in': "url('/background-sign-in.webp')",
        home: "url('/background-home.jpeg')",
      },
      fontFamily: {
        poppins: 'var(--font-poppins)',
        league: 'var(--font-league)',
      },
      borderRadius: {
        sm: '2px',
        md: '6px',
        lg: '8px',
        xl: '10px',
        '2xl': '12px',
        full: '9999px',
      },
      fontSize: {
        sm: '0.75rem', // 12px
        md: '1rem', // 16px
        lg: '1.125rem', // 20px
        '2xl': '1.5rem', // 24px
        '3xl': '1.75rem', // 28px
        '4xl': '2rem', // 32px
        '5xl': '2.25rem', // 36px
      },
      fontWeight: {
        light: '300',
        regular: '400',
        medium: '500',
        semiBold: '700',
        bold: '800',
      },
      spacing: {
        xxs: '0.125rem', // 2px
        xs: '0.25rem', // 4px
        sm: '0.5rem', // 8px
        md: '0.75rem', // 12px
        lg: '1rem', // 16px
        xl: '1.25rem', // 20px
        '2xl': '1.5rem', // 24px
        '3xl': '2rem', // 32px
        '4xl': '4rem', // 64px
      },
      boxShadow: {},
      // hover:[transform:rotateY(360deg)]
      keyframes: {
        border: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        border: 'border 1s linear infinite',
      },
      background: {
        progress:
          'radial-gradient(closest-side, white 79%, transparent 80% 100%),    conic-gradient(hotpink 75%, pink 0);   ',
        darkBlueGradient: 'linear-gradient(#091428, #0A1428)',
        goldGradient: 'linear-gradient(#785A28, #C89B3C)',
        blueGradient: 'linear-gradient(#005A82, #0AC8B9)',
      },
      backgroundPosition: {},
      textShadow: {},
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') },
      )
    }),
  ],
  // plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
