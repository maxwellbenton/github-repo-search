import { render, screen } from '@testing-library/react';
import SearchForm from '../index'

test('renders SearchForm', () => {
  const data = {
    setData: jest.fn(),
    setUser: jest.fn()
  }
  render(<SearchForm {...data}/>);
  expect(screen.findByPlaceholderText(/Enter GitHub username/)).toBeTruthy();
});