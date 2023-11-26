import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        snowflake: {
          custom: '#EEF0F0',
        },
        arcticFox: {
          custom: '#EBEBE7',
        },
        milkGlass: {
          custom: '#FAF8F0',
        },
        vanillaShake: {
          custom: '#FFFDF8',
        },
        violetHush: {
          custom: '#E4E3E5',
        },
        snowbelt: {
          custom: '#F2F4F8',
        },
        earlyFrost: {
          custom: '#D7E2E9',
        },
        velvetBlack: {
          custom: '#2C2627',
        },
        piecesLight: {
          custom: '#F4F7FA',
        },
        piecesDark: {
          custom: '#B7C0D8',
        },
        ashViolet: {
          custom: '#9593A4',
        },
        majesticMist: {
          custom: '#9CA1B3',
        },
        naturallyCalm: {
          custom: '#CFD1DA',
        },
        nyctophileBlue: {
          custom: '#080E2C',
        },
        woodBark: {
          custom: '#302621',
        },
        antarcticDeep: {
          custom: '#3A3C42',
        },
        blackout: {
          custom: '#242121',
        },
        carbon: {
          custom: '#333333',
        },
        chillyWhite: {
          custom: '#ECF4F1',
        },
        smokedPurple: {
          custom: '#444251',
        },
        midnightBadger: {
          custom: '#575965',
        },
      },
      gridTemplateRows: {
        '8': 'repeat(8, minmax(0, 1fr))',
      },
      gridRow: {
        'span-11': 'span 1 / span 11',
      }
    },
  },
  plugins: [],
}
export default config
