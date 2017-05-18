process.stdin.resume()
process.stdin.setEncoding("utf8")
var util = require("util")
var fs = require("fs")

console.log("Enter your GitHub API token:")
process.stdin.on("data", function(text) {
  var tokenJS = `module.exports = "${text.trim()}"\n`

  fs.writeFile("src/token.js", tokenJS, function(err) {
    console.log("API token saved.")
    process.exit()
  })
})
