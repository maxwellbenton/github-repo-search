import { render, screen } from '@testing-library/react';
import LoadingMessage from '../index';


test('renders a loading message when retrieving data', async () => {
  const data = {loading: true};
  render(<LoadingMessage {...data}/>);
  const element = await screen.findByTestId('loading');
  expect(element).toBeInTheDocument();
});

test('does not render a loading message when not loading', () => {
  const data = {loading: false};
  render(<LoadingMessage {...data}/>);
  const element = screen.queryByText('Loading');
  expect(element).toBeNull();
});
