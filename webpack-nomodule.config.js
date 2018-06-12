'use strict';

const BROWSERS = ['> 1%', 'last 2 versions', 'Firefox ESR', 'not ie <=  11'];

const babelOptions = {
  presets: [
   ['babel-preset-env',
   {
   targets: {browsers: BROWSERS},
   }
  ]],
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
    }
  };
};
