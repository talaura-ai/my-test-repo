import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


test('fails intentionally', () => {
  render(<App />);

  // This text does not exist, so test will fail
  const element = screen.getByText(/this text will fail/i);

  expect(element).toBeInTheDocument();
});