import daisy from './node_modules/daisyui/src/index.d.ts';

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", 'node_modules/daisyui/dist/**/*.js', 'node_modules/react-daisyui/dist/**/*.js'],
    plugins: [require(daisy)]
  };
  