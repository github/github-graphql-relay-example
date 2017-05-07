import React from 'react'
import {createPaginationContainer, graphql} from 'react-relay'

import RepositoryListItem from './RepositoryListItem'

class Dashboard extends React.Component {
  render() {
    const {viewer} = this.props.data

    return (
      <div className="repositories">
        <ul className="list-group">
          <li className="list-group-item">
            <strong>Your repositories</strong>
            <span className="badge">{viewer.repositories.totalCount}</span>
          </li>

          {viewer.repositories.edges.map(edge => (
            <RepositoryListItem repository={edge.node} key={edge.node.id} />
          ))}

          <ShowMore repositories={viewer.repositories} onClick={event => {
            event.preventDefault()
            this.loadMoreRepositories()
          }} />
        </ul>
      </div>
    )
  }

  loadMoreRepositories() {
    this.props.relay.loadMore(10, (err) => {})
  }
}

function ShowMore({repositories, onClick}) {
  if (repositories.pageInfo.hasNextPage) {
    return (
      <li className="list-group-item show-more">
        <a href="#" onClick={onClick}>
          Show more repositories...
        </a>

        <span className="octicon octicon-sync spinner"></span>
      </li>
    )
  } else {
    return <noscript></noscript>
  }
}

export default createPaginationContainer(
  Dashboard,
  graphql`
    fragment Dashboard on Query {
      viewer {
        repositories(first: $count, after: $cursor) @connection(key: "Dashboard_repositories") {
          totalCount

          pageInfo {
            hasNextPage
            endCursor
          }

          edges {
            node {
              id
              ...RepositoryListItem_repository
            }
          }
        }
      }
    }
  `,
  {
    getVariables(props, {count, cursor}, fragmentVariables) {
      return {count, cursor}
    },
    query: graphql`
      query DashboardPaginationQuery($count: Int!, $cursor: String) {
        ...Dashboard
      }
    `
  }
)
