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
        gray: {
          100: '#D8D8D8',
          500: '#65656f',
        },
        white: {
          100: '#fff',
          200: '#ededed',
        },
        yellow: {
          300: '#f0e6d2',
          500: '#C2B998',
          600: '#999487',
          700: '#c7984a',
        },
        blue: {
          100: '#0acbe6',
          300: '#177AF2',
          400: '#00439A',
          900: '#010A13',
        },
        green: {
          100: '#47CC95',
          200: '#117B0D',
          300: '#248751',
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
      boxShadow: {
        input:
          '0 0 .2rem #fff,0 0 .2rem #fff,0 0 2rem #fd0352,0 0 0.8rem #fd0352,0 0 2.8rem #fd0352,inset 0 0 1.3rem #fd0352; ',
        button:
          '0 0 .2rem #fff,0 0 .2rem #fff,0 0 2rem #fd0352,0 0 0.8rem #fd0352,0 0 2.8rem #fd0352,inset 0 0 1.3rem #fd0352; ',
        'button-hover':
          '0 0 .2rem #fff,0 0 .2rem #fff,0 0 2rem #fff,0 0 0.8rem #fff,0 0 2.8rem #fff,inset 0 0 1.3rem #fff; ',
      },
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
      },
      backgroundPosition: {},
      textShadow: {
        'sign-in':
          '0px 0px 10px #fd0352, 0px 0px 20px #fd0352, 0px 0px 40px #fd0352, 0px 0px 80px #fd0352',
        input:
          '0px 0px 10px #000, 0px 0px 20px #000, 0px 0px 40px #000, 0px 0px 80px #000',
      },
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
