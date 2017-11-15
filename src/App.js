import React from 'react'

import {QueryRenderer, graphql} from 'react-relay'

import environment from './createRelayEnvironment'

import Layout from './Layout'
import Dashboard from './Dashboard'

function App() {
  const query = graphql`
    query AppQuery($count: Int!, $cursor: String) {
      ...Dashboard
    }
  `

  const variables = {
    count: 10
  }

  return <QueryRenderer environment={environment} query={query} variables={variables} render={RenderApp} />
}

function RenderApp({error, props}) {
  if (error) {
    return <div>{error.message}</div>
  } else if (props) {
    return (
      <Layout>
        <Dashboard data={props} />
      </Layout>
    )
  } else {
    return <div>Loading</div>
  }
}

export default App
