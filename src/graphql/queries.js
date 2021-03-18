// same query function used for initial and paginated requests
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
            isFork
            forkCount
            isPrivate
            url
            issues(first:10) {
              nodes {
                title
                bodyText
              }
            }
            languages(first:10) {
              nodes {
                name
              }
            }
          }
        }
        }
      }
    }
  `)
}


