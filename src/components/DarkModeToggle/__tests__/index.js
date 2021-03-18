

import { render, screen } from '@testing-library/react';
import DarkModeToggle from '../index';

test('displays Dark Mode when in Light Mode', async() => {
  const data = {darkMode: false}
  render(<DarkModeToggle {...data}/>);
  const element = await screen.findByText('Dark Mode');
  expect(element).toBeInTheDocument();
});

test('displays Light Mode when in Dark Mode', async () => {
  const data = {darkMode: true}
  render(<DarkModeToggle {...data}/>);
  const element = await screen.findByText('Light Mode');
  expect(element).toBeInTheDocument();
});