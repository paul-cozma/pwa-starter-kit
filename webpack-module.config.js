'use strict';

const {resolve} = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const outputPath = resolve('dist');
const IS_DEV_SERVER = process.argv.find(arg => arg.includes('webpack-dev-server'));

const babelOptions = {
  presets: [
   ['env',
    {
      targets: {browsers: ['last 2 Chrome versions', 'Safari 10']},
      debug: true
    }
  ]
  ],
  plugins: [
    require('babel-plugin-syntax-dynamic-import'), 
    require('babel-plugin-transform-object-rest-spread'), [
    require('babel-plugin-transform-runtime'),
    {
      helpers: false,
      polyfill: false,
      regenerator: true
    },
    
  ]]
};

module.exports = () => {
  return {
    module: {
      rules: [
        {
          test: /\.js$/,
          use: {
            loader: 'babel-loader',
            options: babelOptions
          }
        },
      ]
    },
    plugins: IS_DEV_SERVER ? [] : [
      new CleanWebpackPlugin([outputPath], {verbose: true})
    ]
  };
};
