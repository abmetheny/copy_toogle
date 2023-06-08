const daisy = require('./node_modules/daisyui');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [require(daisy)],
};
