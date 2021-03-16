import Consumer, { ConfigProvider } from '../../context/configContext'
import Title from '../Title/';
import SearchForm from '../SearchForm/';
import LoadingMessage from '../LoadingMessage/';
import LoadMore from '../LoadMore/';
import ResultsContainer from '../ResultsContainer/';
import './App.css';



function App() {

  function determineTheme(data) {
    return data.darkMode ? THEME.dark : THEME.light
  }

  return (
      <ConfigProvider>
        <Consumer>
          {data => (
            <div className="App" style={determineTheme(data)}>
              <Title />
              <SearchForm setData={data.setData} setUser={data.setUser}/>
              <ResultsContainer repositories={data.repositories} />
              <LoadingMessage loading={data.loading}/>
              <LoadMore repositories={data.repositories} getRepos={data.getRepos} />
            </div>)
          }
        </Consumer>
      </ConfigProvider>
  );
}

export default App;
