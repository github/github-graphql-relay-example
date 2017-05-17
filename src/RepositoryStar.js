import React from 'react'
import {createFragmentContainer, graphql} from 'react-relay'

export default createFragmentContainer(
  RepositoryStar,
  graphql`
    fragment RepositoryStar_repository on Repository {
      stargazers {
        totalCount
      }
    }
  `
)

function RepositoryStar({repository}) {
  return (
    <span className="star-badge">
      {repository.stargazers.totalCount}
      <span className="octicon octicon-star"></span>
    </span>
  )
}
