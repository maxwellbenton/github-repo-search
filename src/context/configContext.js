import { createContext, useState,  useEffect } from "react";
import  { idbKeyval } from '../indexDB/'
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

  const handleUserSearch = (newUser) => {
    if (newUser !== user) {
      setData({
        userInfo: {},
        repositories: [],
        endCursor: null
      })
      setUser(newUser)
    }
  }

  useEffect(() => {
    if (user) { 
      getRepos()
    }
  }, [user])

  useEffect(async () => {
    let storedDarkModeState = await idbKeyval.get('darkmode')
    if (storedDarkModeState === undefined) {
      await idbKeyval.set('darkmode', false)
    }
    if (typeof storedDarkModeState === 'boolean') {
      setDarkMode(storedDarkModeState)
    }
  }, [])

  useEffect(() => {
    idbKeyval.set('darkmode', darkMode)
  }, [darkMode])

console.log(darkMode)
  return (
    <Provider
      value={{ ...data, handleUserSearch, getRepos, loading, darkMode, toggleDarkMode }}
    >
      {props.children}
    </Provider>
  )
}

export { ConfigProvider };
export default Consumer;