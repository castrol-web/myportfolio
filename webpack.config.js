const path = require('path');

export default {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'frontend/build'), // Adjust output path
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'frontend/build'), // Adjust contentBase
    port: 3000,
  },
};
