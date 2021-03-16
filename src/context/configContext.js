import { createContext, useState,  useEffect } from "react";
import { repoQuery } from '../graphql/queries'; 
import { GRAPHQL_DOMAIN } from "../constants";
const { Provider, Consumer } = createContext();

const ConfigProvider = (props) => {
  const [data, setData] = useState({
    userInfo: {},
    repositories: [],
    endCursor: null
  })
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState(null)
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(preState => !preState)
  }

  const getRepos = async () => {
    
    setLoading(true)
    const response = await fetch(GRAPHQL_DOMAIN, {
        method:'POST',
        headers:{
          'content-type':'application/json',
          "Authorization": `bearer ${process.env.REACT_APP_GITHUB_PERSONAL_TOKEN}`
        },
        body:JSON.stringify({
          query: repoQuery(user, data.endCursor)
        })
    })
    
    const body = await response.json();
    console.log(body)
    setData(prevData => ({...prevData, 
                          repositories: [...prevData.repositories, ...body.data.search.edges],
                          endCursor: body.data.search.pageInfo.endCursor
                        }))
    setLoading(false)
  }

  useEffect(() => {
    if (user) { 
      getRepos()
    }
  }, [user])

  return (
    <Provider
      value={{ ...data, setUser, setData, getRepos, loading, darkMode, toggleDarkMode }}
    >
      {props.children}
    </Provider>
  )
}

export { ConfigProvider };
export default Consumer;