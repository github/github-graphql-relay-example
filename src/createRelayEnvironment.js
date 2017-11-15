/* eslint-disable github/no-then */

import {Environment, Network, RecordSource, Store} from 'relay-runtime'
import token from './token'

function fetchQuery(operation, variables) {
  return fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({query: operation.text, variables})
  }).then(response => {
    return response.json()
  })
}

const network = Network.create(fetchQuery)
const source = new RecordSource()
const store = new Store(source)

export default new Environment({network, store})
