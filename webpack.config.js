const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    entry: './src/client/index.js',
    output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
          test:/\.css$/,
          use: [
              {
                  loader: MiniCssExtractPlugin.loader,
              },
              'css-loader'
          ]
      },
      {
        test: /\.(png|gif|jpg)$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: 'assets/[hash].[ext]' },
          }
        ],
      }
      ]
    },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/public/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
        filename: 'assets/[name].css',
    }),
    // new LiveReloadPlugin()
  ],
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 3005,
  }
};