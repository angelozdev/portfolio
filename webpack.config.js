const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const FaviconsWB = require('favicons-webpack-plugin')
const WorkboxWP = require('workbox-webpack-plugin')

module.exports = {
   entry: path.resolve(__dirname, 'src', 'index.tsx'),
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/'
   },
   module: {
      rules: [
         {
            test: /\.(t|j)sx?$/,
            use: 'babel-loader',
            exclude: /node_modules/
         },
         {
            test: /\.(png|jpge?|gif)$/i,
            use: 'file-loader'
         }
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
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
         template: path.resolve(__dirname, 'public', 'index.html'),
         filename: 'index.html'
      }),
      new FaviconsWB({
         logo: path.resolve(__dirname, 'public', 'icon.png'),
         favicons: {
            appName: 'Angelo Zambrano | Portfolio',
            background: '#1a1a1a',
            theme_color: '#1a1a1a',
            appShortName: 'AZ | Porfolio',
            start_url: '/',
            orientation: 'portrait'
         },
         publicPath: '/'
      }),
      new WorkboxWP.GenerateSW({
         navigateFallback: '/index.html',
         runtimeCaching: [
            {
               urlPattern: new RegExp('(html|css|js|json)'),
               handler: 'NetworkFirst',
               options: {
                  cacheName: 'statics'
               }
            },
            {
               urlPattern: new RegExp('(png|jpge?)'),
               handler: 'CacheFirst',
               options: {
                  cacheName: 'images'
               }
            }
         ]
      })
   ]
}
