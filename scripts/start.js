process.env.NODE_ENV = 'development'

var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var path = require('path')

var config = {
  entry: [
    require.resolve('../src/index.js')
  ],
  output: {
    path: __dirname + '/../build',
    filename: 'static/js/bundle.js'
  },
  resolve: {
    fallback: [],
    extensions: ['.js', '']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.normalize(__dirname + '/../src'),
        loader: 'babel'
      }
    ]
  }
}

new WebpackDevServer(webpack(config), {
  contentBase: __dirname + '/../public',
  publicPath: '/'
}).listen(3000)
