import PropTypes from 'prop-types';
import './LoadingMessage.css';

const LoadingMessage = ({loading}) => loading ? <div className="loading">Loading...</div> : null;

export default LoadingMessage;

LoadingMessage.propTypes = {
  loading: PropTypes.bool
};