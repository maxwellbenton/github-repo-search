import {useState, useEffect} from 'react';
import Consumer, { ConfigProvider } from '../../context/configContext'
import Title from '../Title/';
import SearchForm from '../SearchForm/';
import Loading from '../Loading/';
import './App.css';


function App() {


  function handleScroll(event) {
    const target = event.target
    // if (target.scrollHeight - target.scrollTop === target.clientHeight) {
    //   if (repoCount > repositories.length) {
    //     // searchForRepos()
    //   }
    // }
  }

  return (
    <div className="App" onScroll={handleScroll}>
      <Title />
      <ConfigProvider>
        <Consumer>
          {({getRepos}) => <SearchForm getRepos={getRepos}/>}
        </Consumer>
        
      
        <Consumer>
          {data => data.repositories.map(repo => <h5>{repo.node.id}</h5>)}
        </Consumer>

        <Consumer>
          {data => {
            return data.loading ? <div id="loadingIndicator">Loading...</div> : null
          }} 
        </Consumer>
      </ConfigProvider>
      
      
    </div>
  );
}

export default App;
