import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders Hello React', () => {
  render(<Home />);
  const element = screen.getByText(/Hello React/i);
  expect(element).toBeInTheDocument();
});
