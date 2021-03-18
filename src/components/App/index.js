import Consumer, { ConfigProvider } from '../../context/configContext'
import Title from '../Title/';
import SearchForm from '../SearchForm/';
import LoadingMessage from '../LoadingMessage/';
import LoadMore from '../LoadMore/';
import ResultsContainer from '../ResultsContainer/';
import DarkModeToggle from '../DarkModeToggle';
import { determineTheme } from '../../theme/index';
import './App.css';


const App = () => {
  return (
      <ConfigProvider>
        <Consumer>
          {({darkMode, handleUserSearch, repositories, loading, getRepos, toggleDarkMode}) => (
            <div className="App" style={determineTheme(darkMode)}>
              <Title />
              <SearchForm handleUserSearch={handleUserSearch}/>
              <ResultsContainer repositories={repositories} darkMode={darkMode} />
              <LoadingMessage loading={loading}/>
              <LoadMore repositories={repositories} getRepos={getRepos} />
              <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </div>)
          }
        </Consumer>
      </ConfigProvider>
  );
};

export default App;
