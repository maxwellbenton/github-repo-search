import { render, screen } from '@testing-library/react';
import RepoCard from '../index';

test('renders RepoCard', async () => {
  const props = {node: {
    createdAt: "2018-01-24T02:24:43Z",
    description: "A simple, general normalizer function for converting JSON nested data to relational data objects.",
    forkCount: 0,
    id: "MDEwOlJlcG9zaXRvcnkxMTg2OTk1MjI=",
    isPrivate: false,
    issues: {nodes: Array(0)},
    languages: {nodes: Array(2)},
    name: "universal-normalizer",
    url: "https://github.com/maxwellbenton/universal-normalizer"
  }}
  render(<RepoCard {...props}/>);

  const title = await screen.findByText("universal-normalizer")
  const description = await screen.findByText('A simple, general normalizer function for converting JSON nested data to relational data objects.')

  expect(title).toBeInTheDocument();
  expect(description).toBeInTheDocument();
});