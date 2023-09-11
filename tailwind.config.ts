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
        titleBold: [
          '32px',
          {
            fontWeight: '700',
            lineHeight: '41.6px',
          },
        ],

        title: [
          '24px',
          {
            fontWeight: '400',
            lineHeight: '31.2px',
          },
        ],
        button: [
          '20px',
          {
            fontWeight: '500',
            lineHeight: '26px',
          },
        ],
        body1: [
          '16px',
          {
            fontWeight: '600',
            lineHeight: '20.8px',
          },
        ],
        body2: [
          '14px',
          {
            fontWeight: '400',
            lineHeight: '19.5px',
          },
        ],
        caption: [
          '12px',
          {
            fontWeight: '400',
            lineHeight: '15.6px',
          },
        ],
      },
    },
    boxShadow: {
      inputField: '0px 0px 8px 0px rgba(21, 21, 21, 0.10) inset',
      typeBtn: '0px 0px 8px 0px rgba(21, 21, 21, 0.05)',
    },
  },
  plugins: [require('tailwindcss-animated')],
}

export default config
