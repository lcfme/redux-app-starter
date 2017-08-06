module.exports = {
  entry: ['babel-polyfill', `${__dirname}/src/index.js`],
  output: {
    path: `${__dirname}/www/dist/`,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/i,
        exclude: `${__dirname}/node_modules`,
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'stage-1', 'react']
        }
      },
      {
        test: /\.css$/i,
        loader: 'style-loader!css-loader'
      }
    ]
  }
}
