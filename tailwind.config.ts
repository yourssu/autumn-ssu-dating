import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pink: '#EE518A',
        lightPink: '#FDD4E3',
        white: '#FFFFFF',
        palePink: '#FFF8F9',
        whitePink: '#FFFDFE',
        black: '#1B0404',
        gray: '#C8C8C8',
      },
      fontSize: {
        titleBold: '32px',
        title: '24px',
        button: '20px',
        body1: '16px',
        body2: '14px',
        caption: '12px',
      },
      fontWeight: {
        titleBold: '700',
        title: '400',
        button: '500',
        body1: '600',
        body2: '400',
        caption: '400',
      },
      lineHeight: {
        titleBold: '41.6px',
        title: '31.2px',
        button: '26px',
        body1: '20.8px',
        body2: '19.5px',
        caption: '15.6px',
      },
    },
    boxShadow: {
      inputField: '0px 0px 8px 0px rgba(21, 21, 21, 0.10) inset',
      typeBtn: '0px 0px 8px 0px rgba(21, 21, 21, 0.05)',
    },
  },
  plugins: [],
}

export default config
