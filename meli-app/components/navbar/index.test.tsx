import Navbar from '.';
import { cleanup, render, screen, fireEvent } from '@testing-library/react';
import mockRouter from 'next-router-mock';

jest.mock('next/router', () => require('next-router-mock'));

afterEach(cleanup);

describe('Navbar Component', () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl('/');
  });

  test('should render component', () => {
    const { container } = render(<Navbar />);
    expect(container).toBeTruthy();
  });

  test('should navigate to items page', () => {
    render(<Navbar />);
    const input = screen.getByPlaceholderText(/Nunca dejes de buscar/i);
    fireEvent.change(input, {
      target: { value: 'iphone' },
    });
    fireEvent.submit(screen.getByRole('form'));
    expect(mockRouter.pathname).toBe('items');
    expect(mockRouter.query).toStrictEqual({ search: 'iphone' });
  });
});
