import { render } from '@testing-library/react';
import ResultsContainer from '../index';


test('renders ResultsContainer', () => {
  const data = {
    repositories: []
  };
  render(<ResultsContainer {...data} />);
});