var fetch = require('node-fetch')
var fs = require('fs')
try {
  var token = require('../src/token')
} catch (e) {
  console.log("You need to install your token: `yarn run get-token`")
  process.exit(1)
}

const { buildClientSchema, introspectionQuery, printSchema } = require('graphql/utilities')

fetch('https://api.github.com/graphql', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + token
  },
  body: JSON.stringify({ 'query': introspectionQuery }),
}).then(res => res.json()).then(res => {
  const schemaString = printSchema(buildClientSchema(res.data))
  fs.writeFileSync('schema.graphql', schemaString)
})
