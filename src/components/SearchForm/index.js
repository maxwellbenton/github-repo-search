import PropTypes from 'prop-types';

const SearchForm = ({handleUserSearch}) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    handleUserSearch(event.target.username.value);
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input id="usernameInput" name="username" type="text" placeholder="Enter GitHub username"></input>
      <input type="submit"></input>
    </form>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  handleUserSearch: PropTypes.func
};
