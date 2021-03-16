const SearchForm = ({getRepos}) => {

  function handleSubmit(event) {
    event.preventDefault()
    getRepos(event.target.username.value)
    event.target.reset()
  }

  return (
    
    <form onSubmit={handleSubmit}>
      <input name="username" type="text" placeholder="Enter GitHub username"></input>
      <input type="submit"></input>
    </form>    
  )
}

export default SearchForm


