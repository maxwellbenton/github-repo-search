import './RepoCard.css';

const RepoCard = ({node}) => {
  console.log(node)
  return (
    <div className="repositoryCard">
      <p className="repoTitle">{node.name}</p>
      <p className="repoDesc">{node.description}</p>
    </div>
  )
}

export default RepoCard;