/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      montserrat: ['Montserrat', 'system-ui'],
    },
    extend: {
      animation: {
        'ping-slow': 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      maxWidth: {
        '4xl': 1656,
      },
      fontSize: {
        m: 18,
      },
      borderWidth: {
        0.5: 0.5,
      },
      borderRadius: {
        min: 4,
        default: 5,
      },
      colors: {
        crimson: {
          400: '#FF5959',
          500: '#F33D3D', // главный
          600: '#D22828',
        },
        iron: {
          100: '#DCDCDC', // незначительные подчеркивания | обводка блоков
          200: '#AFAFAF', // мини карточки товаров
          300: '#808284', // полупрозрачный | неактивный текст
          400: '#5C5D5E', // обычный не броский текст
          500: '#4A4C4F', // кнопки
          550: '#3E4042', // hover кнопки
          600: '#1F2122', // броский текст | важные элементы: шапка и тд.
        },
      },
    },
  },
  plugins: [],
}
