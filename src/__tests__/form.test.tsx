import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from '../components/pages/Form/Form';

describe('Form component', () => {
  it('should render form component correctly', () => {
    render(<Form />);
    const element = screen.getByText(/React Testing/i);
    expect(element).toBeInTheDocument();
  });

  it('should not show any error message when the component is loaded', () => {
    render(<Form />);
    const alertElement = screen.queryByTestId('error-message');
    expect(alertElement).not.toBeInTheDocument();
  });

  it('should show error message when a field is not entered', () => {
    render(<Form />);
    const button = screen.getByRole('button');
    userEvent.click(button);
    const alert = screen.getByTestId('error-message');
    expect(alert).toBeInTheDocument();
  });

  it('should show success message when fields are entered correctly', () => {
    const alertMock = jest.spyOn(window, 'alert').mockImplementation();
    render(<Form />);
    const usernameInput = screen.getByTestId(/username/i);
    const passwordInput = screen.getByTestId(/password/i);
    fireEvent.change(usernameInput, { target: { value: 'admin' } });
    fireEvent.change(passwordInput, { target: { value: 'admin' } });
    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(alertMock).toHaveBeenCalled();
  });
});
