process.env.NODE_ENV = 'development'

const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const path = require('path')

const config = {
  entry: [require.resolve('../src/index.js')],
  output: {
    path: `${__dirname}/../build`,
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
        include: path.normalize(`${__dirname}/../src`),
        loader: 'babel'
      }
    ]
  }
}

new WebpackDevServer(webpack(config), {
  contentBase: `${__dirname}/../public`,
  publicPath: '/'
}).listen(3000)
