import React from 'react'
import {createFragmentContainer, graphql} from 'react-relay'

import RepositoryIcon from './RepositoryIcon'

export default createFragmentContainer(
  RepositoryListItem,
  graphql`
    fragment RepositoryListItem_repository on Repository {
      name
      owner {
        login
      }

      url

      stargazers {
        totalCount
      }

      ...RepositoryIcon_repository
    }
  `
)

function RepositoryListItem({repository}) {
  return (
    <li className="list-group-item">
      <span className="star-badge">
        {repository.stargazers.totalCount}
        <span className="octicon octicon-star"></span>
      </span>

      <RepositoryIcon repository={repository} />

      <a href={repository.url}>
        {repository.owner.login}/{repository.name}
      </a>
    </li>
  )
}
