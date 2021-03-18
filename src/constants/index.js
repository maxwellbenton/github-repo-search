export const APP_TITLE = "GitHub Repository Search";
export const GRAPHQL_DOMAIN = "https://api.github.com/graphql";
export const GITHUB_TOKEN = secrets ? secrets.REACT_APP_GITHUB_PERSONAL_TOKEN ? secrets.REACT_APP_GITHUB_PERSONAL_TOKEN : process.env.REACT_APP_GITHUB_PERSONAL_TOKEN : process.env.REACT_APP_GITHUB_PERSONAL_TOKEN;