module.exports = {
  entry: ['babel-polyfill', `${__dirname}/src/index.js`],
  output: {
    path: `${__dirname}/www/dist/`,
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
        test: /\.jsx?$/i,
        exclude: `${__dirname}/node_modules`,
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'stage-1', 'react']
        }
      },
      {
        test: [/\.less$/, /\.css$/],
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "less-loader" // compiles Less to CSS
          }
        ]
      }
    ]
  }
}
