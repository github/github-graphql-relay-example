import React from 'react'
import {commitMutation, graphql} from 'react-relay'
import environment from './createRelayEnvironment'
import RepositoryStar_repository from './RepositoryStar'

const starMutationGraphql = graphql`
  mutation MutationsRepositoryStarMutation($input: StarInput!) {
    star(input: $input) {
      starrable {
        ...RepositoryStar_repository
      }
    }
  }
`

export function starMutation(starrableId) {
  const variables = {
    input: {
      starrableId
    },
  }

  commitMutation(environment, {
    mutation: starMutationGraphql,
    variables,
  })
}

const unstarMutationGraphQL = graphql`
  mutation MutationsRepositoryStarUnstarMutation($input: UnstarInput!) {
    unstar(input: $input) {
      starrable {
        ...RepositoryStar_repository
      }
    }
  }
`

export function unstarMutation(starrableId) {
  const variables = {
    input: {
      starrableId
    }
  }

  commitMutation(environment, {
    mutation: unstarMutationGraphQL,
    variables,
  })
}
