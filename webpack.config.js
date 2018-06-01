const {resolve, join} = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const {GenerateSW} = require('workbox-webpack-plugin');
const isDev = process.argv.find(arg => arg.includes('webpack-dev-server'));
const outputPath = isDev ? resolve('src') : resolve('dist');
const OUTPUT_PATH = resolve('./dist');
const stylusLoader = require('./stylus-loader').default;
const babelOptions = {
  presets: [
    require('babel-preset-env')
  ],
  plugins: [
    require('babel-plugin-syntax-dynamic-import'), 
    require('babel-plugin-transform-object-rest-spread'), [
    require('babel-plugin-transform-runtime'),
    {
      helpers: false,
      polyfill: false,
      regenerator: true
    }
  ]]
};

module.exports = {
  entry: './src/index.js',
  output: {
    path: outputPath,
    filename: 'bundle.js'
  },
  plugins: [
    new UglifyJsPlugin(),
    new GenerateSW({
      swDest: 'sw.js',
  clientsClaim: true,
  skipWaiting: true,
  navigateFallback: "/index.html",
      runtimeCaching: [
        {
          urlPattern: new RegExp('https://soulmatters.ro/'),
          handler: 'networkFirst'
        },
        {
          // Match any request ends with .png, .jpg, .jpeg or .svg.
          urlPattern: /\.(?:png|jpg|jpeg|svg)$/,

          // Apply a cache-first strategy.
          handler: 'cacheFirst',

          options: {
            // Only cache 10 images.
            expiration: {
              maxEntries: 10,
            },
          }
        },
      ]
    })
  ],
  module: {
    rules:
    [{
      test: /\.html$/,
      use: ['html-loader', 'postcss-html-loader']
      },
      // If you see a file that ends in .js, just send it to the babel-loader.
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: babelOptions
        }
      },
      {
        test: /\.md$/,
        use: ['json-loader', 'yaml-frontmatter-loader']
      },
      {
        test: /\.styl$/,
        use: [{
            loader: 'to-string-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'stylus-loader'
          }
         
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'to-string-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      }
    ]
  },
  
  devServer: {
    contentBase: resolve(outputPath),
    compress: true,
    overlay: {
      errors: true
    },
    historyApiFallback: true,
    publicPath: '/',
    port: 6060,
    host: '0.0.0.0'
  }
};