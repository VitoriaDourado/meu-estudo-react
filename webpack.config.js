const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src/main/index.tsx'),
  output: {
    path: path.join(__dirname, 'public/js'),
    publicPath: '/js/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader' 
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, 
        type: 'asset/resource', 
      },
    ]
  },
  devServer: {
    devMiddleware: {
      writeToDisk: true, 
    },
    static: './public',
    historyApiFallback: true
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
  devtool: 'source-map'
};
