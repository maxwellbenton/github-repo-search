import PropTypes from 'prop-types';

const LoadingMessage = ({loading}) => loading ? <div id="loading">Loading...</div> : null

export default LoadingMessage

LoadingMessage.propTypes = {
  loading: PropTypes.bool
};