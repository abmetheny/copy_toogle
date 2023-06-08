const daisy = require('./daisyui');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [require(daisy)],
};
