/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#EFE7BC',
        secondary: '#E7F2F8',
        tertiary: '#FFA350',
      },
      width: {
        "image-w": '400px'
      },
      height: {
        "image-h": '400px'
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

