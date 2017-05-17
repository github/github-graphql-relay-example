# GitHub GraphQL Rails example application

Demonstrates how to use [Relay Modern](https://facebook.github.io/relay/docs/intro-to-relay-modern.html) to build a simple repository listing web view against the GitHub GraphQL API.

![screeno](https://cloud.githubusercontent.com/assets/137/18425026/a9929d7a-78f0-11e6-9fd4-f478470ad10b.png)

### Running locally

First, you'll need a GitHub API access token to make GraphQL API requests. This should be set as a `API_TOKEN` environment variable.

```
$ git clone https://github.com/github/github-graphql-relay-example
$ cd github-graphql-rails-example/
$ yarn install
$ export API_TOKEN=[your API token here]
$ yarn run get-schema
$ yarn run relay
$ yarn start
```

Once your server is running, you can open http://localhost:3000. You'll be prompted for your token.
