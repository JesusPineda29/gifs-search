import { render, screen } from '@testing-library/react';

function Hello() {
  return <h1>Hello Jesús</h1>;
}

test('muestra el saludo', () => {
  render(<Hello />);
  expect(screen.getByText('Hello Jesús')).toBeInTheDocument();
});