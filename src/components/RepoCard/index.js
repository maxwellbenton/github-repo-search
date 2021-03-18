import PropTypes from 'prop-types';
import { determineTheme2 } from '../../theme';
import './RepoCard.css';

const RepoCard = ({node, darkMode}) => {
  
  return (
    <div className="repositoryCard" style={determineTheme2(darkMode)}>
      <section className="left">
        <a href={node.url}><p className="repoTitle">{node.name}</p></a>
        <p className="repoDesc">{node.description}</p>
        <div className="languages">{node.languages.nodes.map(lang => <span key={lang.name}>{lang.name}</span>)}</div>
      </section>
      <section className="right">
        <div>Forks: {node.forkCount}</div>
        {node.isPrivate ? <div>Private</div> : <div>Public</div>}
        <div>Open Issues: {node.issues.nodes.length} </div>
      </section>
    </div>
  );
};

export default RepoCard;

RepoCard.propTypes = {
  node: PropTypes.object,
  darkMode: PropTypes.bool
};