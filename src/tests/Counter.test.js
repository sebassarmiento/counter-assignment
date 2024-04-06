// import necessary react testing library helpers here
// import the Counter component here
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterHeading = screen.getByText(/Counter/i);
  expect(counterHeading).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const count = screen.getByTestId('count');
  expect(count).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  // Find the increment button and click it
  const incrementButton = screen.getByText('+');
  fireEvent.click(incrementButton);
  
  // Verify the count is incremented
  const count = screen.getByTestId('count');
  expect(count).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above

  // increase to 1
  const incrementButton = screen.getByText('+');
  fireEvent.click(incrementButton);

  // decrease to 1
  const decrementButton = screen.getByText('-');
  fireEvent.click(decrementButton);
  
  // Verify the count is decremented back to 0
  const count = screen.getByTestId('count');
  expect(count).toHaveTextContent('0');
});

