'use strict';

const {resolve, join} = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const {GenerateSW} = require('workbox-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const pkg = require('./package.json');

const moduleConf = require('./webpack-module.config');
const nomoduleConf = require('./webpack-nomodule.config');

const ENV = process.argv.find(arg => arg.includes('NODE_ENV=production')) ? 'production' : 'development';
const IS_DEV_SERVER = process.argv.find(arg => arg.includes('webpack-dev-server'));
const OUTPUT_PATH = IS_DEV_SERVER ? resolve('src') : resolve('dist');

const processEnv = {
  NODE_ENV: JSON.stringify(ENV),
  appVersion: JSON.stringify(pkg.version)
};

/**
 * === Copy static files configuration
 */
const copyStatics = {
  copyWebcomponents: [{
    from: resolve('./node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js'),
    to: join(OUTPUT_PATH, 'vendor'),
    flatten: true
  },  {
    from: resolve('./node_modules/@webcomponents/webcomponentsjs/bundles/*.js'),
    to: join(OUTPUT_PATH, 'vendor/bundles'),
    flatten: true
  },  {
    from: resolve('./node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js'),
    to: join(OUTPUT_PATH, 'vendor'),
    flatten: true
  }],
  copyOthers: [{
    from: 'images/**',
    context: resolve('./src'),
    to: OUTPUT_PATH
  }, {
    from: resolve('./src/index.html'),
    to: OUTPUT_PATH,
    flatten: true
  }, {
    from: resolve('./src/manifest.json'),
    to: OUTPUT_PATH,
    flatten: true
  }, {
    from: resolve('./src/_redirects'),
    to: OUTPUT_PATH,
    flatten: true
  }, {
    from: resolve('./src/admin/**'),
    to: `${OUTPUT_PATH}/admin`,
    flatten: true
  }]
};

/**
 * Plugin configuration
 */
const sharedPlugins = [new webpack.DefinePlugin({'process.env': processEnv})];
const devPlugins = [new CopyWebpackPlugin(copyStatics.copyWebcomponents)];
const buildPlugins = [
  new CopyWebpackPlugin(
    [].concat(copyStatics.copyWebcomponents, copyStatics.copyOthers)
  ),
  new GenerateSW({
    globDirectory: OUTPUT_PATH,
    globPatterns: ['**/!(*map*)'],
    globIgnores: ['**/sw.js'],
    swDest: join(OUTPUT_PATH, 'sw.js'),
    runtimeCaching: [{
      urlPattern: new RegExp('https://api.soulmatters.ro'),
      handler: 'staleWhileRevalidate'
    }]
  })
];

const plugins = sharedPlugins.concat(IS_DEV_SERVER ? devPlugins : buildPlugins);

const shared = env => {
  const IS_MODULE_BUILD = env.BROWSERS === 'module';

  return {
    entry: './src/index.js',
    output: {
      path: OUTPUT_PATH,
      filename: IS_MODULE_BUILD ? 'module.bundle.js' : 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.html$/,
          use: ['text-loader']
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
    plugins,
    devServer: {
      contentBase: OUTPUT_PATH,
      compress: true,
      overlay: {
        errors: true
      },
      port: 6060,
      host: '0.0.0.0',
      disableHostCheck: true,
      historyApiFallback: true,
      publicPath: '/',
    }
  };
};

module.exports = (env = {}) => merge(env.BROWSERS === 'module' ? moduleConf() : nomoduleConf(), shared(env));
