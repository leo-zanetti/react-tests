import { render, screen } from '@testing-library/react';
import Button from '../components/Button/Button';

describe('Button component', () => {
  it('should render button component correctly', () => {
    render(<Button />);
    const element = screen.getByText('Submit');
    expect(element).toBeInTheDocument();
  });
});
