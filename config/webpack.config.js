const path = require('path');

module.exports = {
  entry: './app/js/main.js',
  output: {
    path: path.resolve('./app/dist'),
    filename: 'app.js'
  },
   module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015'] },
        }],
      },
    ],
  },
};
