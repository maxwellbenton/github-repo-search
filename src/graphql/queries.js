export const repoQuery = (user, endCursor = null) => {
  return (`
    query getRepos {
      rateLimit {
        cost
        remaining
        resetAt
      }
      search(query:"user:${user}", type:REPOSITORY, first:30 ${endCursor ? 'after:"' + endCursor + '"' : ''}){  
      repositoryCount
      pageInfo {
        endCursor
        startCursor
      }
      edges {
        node {
        ... on Repository {
            id
            name
            createdAt 
            description 
            isArchived
            isPrivate
            url
          }
        }
        }
      }
    }
  `)
}


