module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      'gray-1': '#F7F7F8',
      'gray-2': '#F4F4F6',
      'gray-3': '#91969E',
      'gray-4': '#DCDDDF',
      'gray-5': '#E3E5E7',
      'gray-6': '#FFFFFF',
      'gray-7': '#F1F1F2',
      'gray-8': '#999999',
      'gray-9': '#4D4D4D',
      'gray-10': '#9B9B9B',
      dark: '#212121',
      error: '#EF5350',
    },
    fontFamily: {
      sans: ['NunitoSans', 'sans-serif'],
    },
    borderRadius: {
      none: 0,
      sm: '4px',
      DEFAULT: '10px',
      md: '16px',
    },
    borderWidth: {
      none: 0,
      DEFAULT: '1px',
    },
    boxShadow: {
      'card-primary': '0 2px 7px rgba(0, 0, 0, 0.07)',
      'dropdown-primary': '0 5px 10px rgba(0, 0, 0, 0.07), 0 3px 14px rgba(0, 0, 0, 0.04)',
    },
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['13px', '20px'],
      base: ['14px', '20px'],
      md: ['15px', '21px'],
      lg: ['16px', '22px'],
      xl1: ['24px', '33px'],
      xl2: ['20px', '27px'],
    },
    extend: {
      ringWidth: {
        3: '3px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
