import {createContext} from 'react'
import { render, mount, screen, } from '@testing-library/react';
import ResultsContainer from '../index';


test('renders app ResultsContainer', () => {
  const data = {
    repositories: []
  };
  render(<ResultsContainer {...data} />);
  
});