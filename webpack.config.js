const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: ["@babel/polyfill", "./src/index.js"],
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'main.js',
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        }
      ],
    },
    resolve: {
      extensions: ["*", ".js", ".jsx"],
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'build'),
      compress: true,
      historyApiFallback: true,
      port: 3000,
    },
    devtool: 'source-map',
    plugins: [new HtmlWebpackPlugin({
        template: "build/index.html",
      }),
    ],
  }