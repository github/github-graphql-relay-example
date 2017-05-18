import React from 'react'
import environment from './createRelayEnvironment'
import {commitMutation, createFragmentContainer, graphql} from 'react-relay'

function starMutation(starrableId) {
  const variables = {
    input: {
      starrableId
    },
  }

  commitMutation(environment, {
    variables,
    mutation: graphql`
      mutation MutationsRepositoryStarMutation($input: StarInput!) {
        star(input: $input) {
          starrable {
            ...RepositoryStar_repository
          }
        }
      }
    `,
  })
}

function unstarMutation(starrableId) {
  const variables = {
    input: {
      starrableId
    }
  }

  commitMutation(environment, {
    variables,
    mutation: graphql`
      mutation MutationsRepositoryStarUnstarMutation($input: UnstarInput!) {
        unstar(input: $input) {
          starrable {
            ...RepositoryStar_repository
          }
        }
      }
    `,
  })
}

export default createFragmentContainer(
  RepositoryStar,
  graphql`
    fragment RepositoryStar_repository on Repository {
      id
      viewerHasStarred
      stargazers {
        totalCount
      }
    }
  `
)

function RepositoryStar({repository}) {
  const octiconClassName = repository.viewerHasStarred ? "octicon octicon-star highlight" : "octicon octicon-star"

  return (
    <span className="star-badge">
      {repository.stargazers.totalCount}
      <a href="#" onClick={(e) => {
        e.preventDefault()
        repository.viewerHasStarred ? unstarMutation(repository.id) : starMutation(repository.id)
      }}>
        <span className={octiconClassName}></span>
      </a>
    </span>
  )
}
