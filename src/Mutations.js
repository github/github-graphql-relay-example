import React from 'react'
import {commitMutation, graphql} from 'react-relay'
import environment from './createRelayEnvironment'

type Variables = {[name: string]: any};

const starMutationGraphql = graphql`
  mutation MutationsRepositoryStarMutation($input: StarInput!) {
    star(input: $input) {
      starrable {
        id
        viewerHasStarred
        stargazers {
          totalCount
        }
      }
    }
  }
`

export function starMutation(starrableId) {
  const variables: Variables = {
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
        id
        viewerHasStarred
        stargazers {
          totalCount
        }
      }
    }
  }
`

export function unstarMutation(starrableId) {
  const variables: Variables = {
    input: {
      starrableId
    }
  }

  commitMutation(environment, {
    mutation: unstarMutationGraphQL,
    variables,
  })
}
