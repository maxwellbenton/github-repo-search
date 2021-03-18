import PropTypes from 'prop-types';
import './LoadMore.css';

// only appears if there are repositories
const LoadMore = ({repositories, loadMore}) => repositories.length > 0 ? <button onClick={loadMore} id="moreReposButton">Load More Repositories</button> : null;  

export default LoadMore;

LoadMore.propTypes = {
  repositories: PropTypes.array,
  getRepos: PropTypes.func
};