import PropTypes from 'prop-types';
import RepoCard from '../RepoCard/';
import './ResultsContainer.css';

const ResultsContainer = ({repositories, darkMode}) => {
  const displayRepositories = () => repositories.map(repo => <RepoCard key={repo.node.id} {...repo} darkMode={darkMode}/>);

  return (
    <div className="results">
      {displayRepositories()}
    </div>
  );
};

export default ResultsContainer;

ResultsContainer.propTypes = {
  repositories: PropTypes.array,
  darkMode: PropTypes.bool
};