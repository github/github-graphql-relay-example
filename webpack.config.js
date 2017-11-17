const config = require('webpack-config-github')

module.exports = env => config(env, {template: 'src/template.html'})
