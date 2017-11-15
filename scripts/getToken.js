/* eslint-disable no-console */

process.stdin.resume()
process.stdin.setEncoding('utf8')

const fs = require('fs')

const filename = 'src/token.js'

if (fs.existsSync(filename)) {
  process.exit()
  return
}

console.log('Enter your GitHub API token:')
process.stdin.on('data', function(text) {
  const tokenJS = `module.exports = "${text.trim()}"\n`

  fs.writeFile(filename, tokenJS, function() {
    console.log('API token saved.')
    process.exit()
  })
})
