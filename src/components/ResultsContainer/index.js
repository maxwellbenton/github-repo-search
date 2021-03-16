import RepoCard from '../RepoCard/';

const ResultsContainer = ({repositories}) => {
  const displayRepositories = () => repositories.map(repo => <RepoCard key={repo.node.id} {...repo} />)

  return (
    <div className="results">
      {displayRepositories()}
    </div>
  )
}

export default ResultsContainer