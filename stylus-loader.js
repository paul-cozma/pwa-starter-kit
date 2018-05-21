module.exports = () => {
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


  return {
    rules: [{
        test: /\.html$/,
        use: ['text-loader']
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
  };
};