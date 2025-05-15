const {fontFamily} = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        blue100: '#0560FD',
        black100: '#222222',
        black90: '#1A1A1A',
        gray100: '#6E6E6E',
        gray90: '#D1CECE',
        gray80: '#C2C2C2',
        red100: '#DA2F58',
      },
      fontSize: {
        text10: ['10px', '16px'],
        text12: ['12px', '20px'],
        text14: ['14px', '20px'],
        text16: ['16px', '20px'],
        text20: ['20px', '28px'],
        text24: ['24px', '32px'],
        text26: ['26px', '34px'],
        text28: ['28px', '36px'],
        text32: ['32px', '40px'],
        text48: ['48px', '56px'],
      },
      fontFamily: {
        'Heebo-Black': ['Heebo-Black', ...fontFamily.sans],
        'Heebo-ExtraBold': ['Heebo-ExtraBold', ...fontFamily.sans],
        'Heebo-Bold': ['Heebo-Bold', ...fontFamily.sans],
        'Heebo-SemiBold': ['Heebo-SemiBold', ...fontFamily.sans],
        'Heebo-Medium': ['Heebo-Medium', ...fontFamily.sans],
        'Heebo-Regular': ['Heebo-Regular', ...fontFamily.sans],
        'Heebo-Light': ['Heebo-Light', ...fontFamily.sans],
        'Heebo-ExtraLight': ['Heebo-ExtraLight', ...fontFamily.sans],
        'Heebo-Thin': ['Heebo-Thin', ...fontFamily.sans],
      },
      borderWidth: {
        default: '1px',
        0: '0',
        0.5: '0.5px',
        1.5: '1.5px',
        2: '2px',
        4: '4px',
        8: '8px',
      },
    },
  },
  plugins: [],
};
