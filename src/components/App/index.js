import Consumer, { ConfigProvider } from '../../context/configContext'
import Title from '../Title/';
import SearchForm from '../SearchForm/';
import LoadingMessage from '../LoadingMessage/';
import LoadMore from '../LoadMore/';
import ResultsContainer from '../ResultsContainer/';
import DarkModeToggle from '../DarkModeToggle';
import './App.css';


const THEME = {
  light: {
    background: '#eee',
    color: '#000'
  },
  dark: {
    background: '#333',
    color: '#eee'
  }
}

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
              <DarkModeToggle darkMode={data.darkMode} toggleDarkMode={data.toggleDarkMode} />
            </div>)
          }
        </Consumer>
      </ConfigProvider>
  );
}

export default App;
