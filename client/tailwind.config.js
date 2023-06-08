const daisy = require('./node_modules/daisyui/src/index.js')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [require(daisy)],
};
