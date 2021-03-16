const LoadMore = ({repositories, getRepos}) => repositories.length > 0 ? <button onClick={getRepos} id="moreReposButton">More Repositories</button> : null  

export default LoadMore;