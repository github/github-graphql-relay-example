import {Environment, Network, RecordSource, Store} from 'relay-runtime'

function fetchQuery(operation, variables, cacheConfig, uploadables) {
  if (!sessionStorage['API_TOKEN']) {
    sessionStorage['API_TOKEN'] = prompt("GitHub API Token")
  }

  return fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + sessionStorage['API_TOKEN']
    },
    body: JSON.stringify({query: operation.text, variables}),
  }).then(response => {
    return response.json()
  })
}

const network = Network.create(fetchQuery)
const source = new RecordSource()
const store = new Store(source)

export default new Environment({network, store})
