module.exports = {
content: [
    './src/pages/**/*.{html,js}',
    './src/components/**/*.{html,js}',
    './src/components/**/**/*.{html,js}',
    './public/index.html',
    './node_modules/daisyui/src/index.js',
  ],
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["light"]
  },
};
