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
        piecesWhite: {
          custom: '#F4F7FA',
        },
        piecesBlack: {
          custom: '#B7C0D8',
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
