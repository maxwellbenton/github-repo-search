import {useState, useEffect} from 'react';
import './App.css';

function generateRepoQuery(user, endCursor) {
  return `
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
`
}

function App() {
  const [user, setUser] = useState(null)
  const [endCursor, setEndCursor] = useState(null)
  const [repoCount, setRepoCount] = useState(0)
  const [repositories, setRepositories] = useState([])

  async function searchForRepos() {
    console.log(generateRepoQuery(user, endCursor))
    const response = await fetch('https://api.github.com/graphql', {
       method:'POST',
       headers:{
         'content-type':'application/json',
         "Authorization": `bearer 83eb0e958fb68858ad0b5cba91692df3e5d22490`
        },
       body:JSON.stringify({
        query: generateRepoQuery(user, endCursor)
      })
    })
    const responseBody =  await response.json();
    console.log(responseBody)
    setRepoCount(responseBody.data.search.repositoryCount)
    setEndCursor(responseBody.data.search.pageInfo.endCursor)
    setRepositories(prevRepos => ([...prevRepos, ...responseBody.data.search.edges]))
  }

  function handleScroll(event) {
    const target = event.target
    if (target.scrollHeight - target.scrollTop === target.clientHeight) {
      if (repoCount > repositories.length) {
        searchForRepos()
      }
      
    }
  }

  function handleSubmit(event) {
    event.preventDefault()

    
    setUser(event.target.username.value)
    event.target.reset()
  }

  useEffect(() => {
    if(user) searchForRepos()
  }, [user])

  console.log(repositories)
  return (
    <div className="App" onScroll={handleScroll}>
      <form onSubmit={handleSubmit}>
        <input name="username" type="text" placeholder="Enter GitHub username"></input>
        <input type="submit"></input>
      </form>
      {repositories.map(repo => (
        <div key={repo.node.id}>
          <a href={repo.node.url}><h3>{repo.node.name}</h3></a>
        </div>
      ))}
    </div>
  );
}

export default App;
