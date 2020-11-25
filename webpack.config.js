const path = require('path');

module.exports = {
  mode: 'development', // set mode option, 'development' or 'production'
  entry: './src/js/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};
