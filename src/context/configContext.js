import { createContext, useState } from "react";
import { repoQuery } from '../graphql/queries'; 
import { GITHUB_TOKEN, GRAPHQL_DOMAIN } from "../constants";
const { Provider, Consumer } = createContext();


// state and GitHub search logic store here in context
const ConfigProvider = (props) => {
  const [data, setData] = useState({
    userInfo: {
      repositoryCount: Infinity
    },
    repositories: [],
    endCursor: null
  });
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(preState => !preState);
  };

  const getRepos = async (userToQuery, endCursor = null) => {
    setLoading(true);
    const response = await fetch(GRAPHQL_DOMAIN, {
        method:'POST',
        headers:{
          'content-type':'application/json',
          "Authorization": `bearer ${GITHUB_TOKEN}`
        },
        body:JSON.stringify({
          query: repoQuery(userToQuery, endCursor)
        })
    });
    const body = await response.json();
    setData(prevData => ({...prevData, 
                          userInfo: {
                            repositoryCount: body.data.search.repositoryCount
                          },
                          repositories: [...prevData.repositories, ...body.data.search.edges],
                          endCursor: body.data.search.pageInfo.endCursor
                        }));
    setLoading(false);
  };

  // sets state for new search
  const handleUserSearch = (newUser) => {
    if (newUser !== user) {
      setData({
        userInfo: {},
        repositories: [],
        endCursor: null
      })
      setUser(newUser)
      getRepos(newUser, data.endCursor)
    }
  };

  const loadMore = () => {
    if (user && data.userInfo.repositoryCount > data.repositories.length) {
      getRepos(user, data.endCursor)
    }
  }

  return (
    <Provider
      value={{ ...data, handleUserSearch, loadMore, loading, darkMode, toggleDarkMode }}
    >
      {props.children}
    </Provider>
  );
}

export { ConfigProvider };
export default Consumer;