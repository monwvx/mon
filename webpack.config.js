const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
  entry: {
    mon: './src/index.ts',
    'mon.min': './src/index.ts',
  },

  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, './dist'),
    library: 'mon',
    libraryTarget: "umd"
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },

  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJSPlugin({
        include: /\.min\.js$/,
      })
    ]
  }
}