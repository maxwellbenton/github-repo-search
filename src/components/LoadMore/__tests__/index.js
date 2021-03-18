import { render, screen, fireEvent } from '@testing-library/react';
import LoadMore from '../index';


test('renders LoadMore when repositories are present', () => {
  const data = {
    repositories: [{node: {
      createdAt: "2018-01-24T02:24:43Z",
      description: "A simple, general normalizer function for converting JSON nested data to relational data objects.",
      forkCount: 0,
      id: "MDEwOlJlcG9zaXRvcnkxMTg2OTk1MjI=",
      isFork: false,
      isPrivate: false,
      issues: {nodes: Array(0)},
      languages: {nodes: Array(2)},
      name: "universal-normalizer",
      url: "https://github.com/maxwellbenton/universal-normalizer"
    }}]
  };

  render(<LoadMore {...data}/>);
  const element = screen.findByTestId('moreReposButton');
  expect(element).not.toBeNull();
});

test('does not render LoadMore when there are zero repositories', () => {
  const data = {
    repositories: []
  };
  render(<LoadMore {...data}/>);
  const button = screen.queryByText('More Repositories');
  expect(button).toBeNull();
});