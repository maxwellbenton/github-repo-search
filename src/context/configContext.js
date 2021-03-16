import { createContext, useState,  useEffect } from "react";
import  { idbKeyval } from '../indexDB';
import { repoQuery } from '../graphql/queries'; 
import { GRAPHQL_DOMAIN } from "../constants";
const { Provider, Consumer } = createContext();

const ConfigProvider = (props) => {
  const [data, setData] = useState({
    user: '',
    userInfo: {},
    repositories: []
  })
  const [loading, setLoading] = useState(false)

  const [user, setUser] = useState(null)
  const [endCursor, setEndCursor] = useState(null)
  const [repoCount, setRepoCount] = useState(0)
  const [repositories, setRepositories] = useState([])
  const [loadingRepos, setLoadingRepos] = useState(false)

  // useEffect(async () => {
  //   let storedData = await idbKeyval.get('data')
  //   if (!storedData) {
  //     await idbKeyval.set('data', data)
  //   } else {
  //     setData({ data: storedData })
  //   }
  // }, [])

  // useEffect(async () => {
  //   let storedData = await idbKeyval.get('data')
  //   if (JSON.stringify(storedData) !== JSON.stringify(data)) {
  //     await idbKeyval.set('data', data)
  //   }
  // }, [data])

  const getRepos = async (user, endCursor = null) => {
    
    setLoading(true)
    const response = await fetch(GRAPHQL_DOMAIN, {
        method:'POST',
        headers:{
          'content-type':'application/json',
          "Authorization": `bearer ${process.env.REACT_APP_GITHUB_PERSONAL_TOKEN}`
        },
        body:JSON.stringify({
        query: repoQuery(user, endCursor)
      })
    })
  
    const body = await response.json();
    setData(prevData => ({...prevData, repositories: body.data.search.edges}))
    setLoading(false)
  }

  return (
    <Provider
      value={{ ...data, getRepos, loading }}
    >
      {props.children}
    </Provider>
  )
}

export { ConfigProvider };
export default Consumer;