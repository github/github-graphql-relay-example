import React from 'react'
import {commitMutation, createFragmentContainer, graphql} from 'react-relay'
import {starMutation, unstarMutation} from './Mutations'

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
