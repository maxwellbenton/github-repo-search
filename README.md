# GitHub Repository Search

[Live Demo][demo]

## Summary

This React app searches GitHub repositories by username using [GitHub's v4 API][github api]. Now in light and dark mode!

## Installation

To set up your own local instance of this React app:

- Fork/clone this repo
- Run `npm install`
- Add a `.env` file to the root directory of the local repo
- Go to GitHub and create a [Personal Access Token][pat]
- Add your token to `.env` as `REACT_APP_GITHUB_PERSONAL_TOKEN=<your-token>`
- Run `npm start`

## Usage

This app simply returns a paginated list of repositories with some basic
information. [Check out the demo!][demo]

## Dependencies

- `"react": "^17.0.1"` - App uses hooks and context
- `"prop-types": "^15.7.2"` - Typechecks component props
## References

- [GitHub v4 API][github api]
- [GitHub Personal Access Token][pat]
- [idb][idb]

[idb]: https://www.npmjs.com/package/idb/v/4.0.1
[github api]: https://docs.github.com/en/graphql
[demo]: https://github.com
[pat]: https://github.com/settings/tokens
