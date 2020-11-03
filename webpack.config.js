const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
   entry: path.resolve(__dirname, 'src', 'index.tsx'),
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/'
   },
   module: {
      rules: [
         { test: /\.(t|j)sx?$/, use: 'babel-loader', exclude: /node_modules/ }
      ]
   },
   devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
      historyApiFallback: true,
      open: true
   },
   resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx'],
      alias: {
         '@components': path.resolve(__dirname, 'src', 'components'),
         '@src': path.resolve(__dirname, 'src')
      }
   },
   plugins: [
      new CleanWebpackPlugin({
         cleanStaleWebpackAssets: false
      }),
      new HtmlWebpackPlugin({
         template: path.resolve(__dirname, 'public', 'index.html'),
         filename: 'index.html'
      })
   ]
}
