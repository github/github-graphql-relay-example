import React from 'react'
import {createFragmentContainer, graphql} from 'react-relay'

export default createFragmentContainer(
  RepositoryIcon,
  graphql`
    fragment RepositoryIcon_repository on Repository {
      isFork
      isMirror
      isPrivate
    }
  `
)

function RepositoryIcon({repository}) {
  if (repository.isFork) {
    return <span className="octicon octicon-repo-forked" />
  } else if (repository.isPrivate) {
    return <span className="octicon octicon-lock" />
  } else if (repository.isMirror) {
    return <span className="octicon octicon-mirror" />
  } else {
    return <span className="octicon octicon-repo" />
  }
}
