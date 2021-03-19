import { render, screen } from '@testing-library/react';
import App from './App';
import DenseAppBar from './components/appBar';

test('renders My Tasks toolbar', () => {
  render(<DenseAppBar />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
