import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello React', () => {
  render(<App />);
  const element = screen.getByText(/Hello React/i);
  expect(element).toBeInTheDocument();
});
