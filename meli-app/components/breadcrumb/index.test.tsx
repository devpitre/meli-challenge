import MainContext from '../../contexts/main-context';
import { cleanup, render, screen, fireEvent } from '@testing-library/react';
import BreadCrumb from '.';

jest.mock('next/router', () => require('next-router-mock'));

const categories = ['category 1', 'category 2', 'category 3'];
const setCategories = jest.fn();

describe('Breadcrumb Component', () => {
  test('should render component', () => {
    render(
      <MainContext.Provider value={{ categories, setCategories }}>
        <BreadCrumb />
      </MainContext.Provider>
    );
    expect(screen.getByText(/category 1/i)).toBeInTheDocument();
    expect(screen.getByText(/category 2/i)).toBeInTheDocument();
    expect(screen.getByText(/category 3/i)).toBeInTheDocument();
  });

  test('should render component', () => {
    const { container } = render(
      <MainContext.Provider value={{ categories: [], setCategories }}>
        <BreadCrumb />
      </MainContext.Provider>
    );
    expect(container).toBeTruthy();
  });
});
