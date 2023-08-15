import { render, screen } from '@testing-library/react';
import Input from '../components/Input/Input';

describe('Input component', () => {
  it('should render username input component correctly', () => {
    render(<Input id='username' title='Username' />);
    const usernameElement = screen.getByTestId('username');
    expect(usernameElement).toBeInTheDocument();
  });

  it('should render password input component correctly', () => {
    render(<Input id='password' title='Password' />);
    const passwordElement = screen.getByTestId('password');
    expect(passwordElement).toBeInTheDocument();
  });
});
