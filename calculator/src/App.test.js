import { render, screen } from '@testing-library/react';
import App from './App';

describe('Calculator Application', () => {

  test('has Functional component text', () => {
    render(<App />);
    const linkElement = screen.getByText(/Calculator using Functional component/i);
    expect(linkElement).toBeInTheDocument();
  });
  
  test('has Class component text', () => {
    render(<App />);
    const linkElement = screen.getByText(/Calculator using Class component/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('has two heading elements', () => {
    render(<App />);
    const functionalCalcElement = screen.getByRole('heading', {
      level: 1,
      name: 'Calculator using Functional component'
    })
    expect(functionalCalcElement).toBeInTheDocument();

    const classCalcElement = screen.getByRole('heading', {
      level: 1,
      name: 'Calculator using Class component'
    })
    expect(classCalcElement).toBeInTheDocument();
  });

})


