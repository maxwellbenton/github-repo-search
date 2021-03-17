import PropTypes from 'prop-types';
import './LoadMore.css'

const LoadMore = ({repositories, getRepos}) => repositories.length > 0 ? <button onClick={getRepos} id="moreReposButton">Load More Repositories</button> : null  

export default LoadMore;

LoadMore.propTypes = {
  repositories: PropTypes.array,
  getRepos: PropTypes.func
};