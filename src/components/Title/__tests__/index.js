import { render, screen } from '@testing-library/react';
import { APP_TITLE } from '../../../constants'
import Title from '../index';

test('renders app title', () => {
  render(<Title />);
  const linkElement = screen.getByText(APP_TITLE);
  expect(linkElement).toBeInTheDocument();
});