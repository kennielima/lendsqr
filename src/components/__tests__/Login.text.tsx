import Login from "../Authentication/Login";
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

jest.mock('../Authentication/Login', () => ({
    __esModule: true,
    default: jest.fn(),
}));

  
describe('Login Component', () => {
    test('renders Login Page if user hasnt logged in', () => {
        render(<Login />);

        const emailInput = screen.getByPlaceholderText('Email');
        const passwordInput = screen.getByPlaceholderText('Password');

        expect(emailInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
    });

    test("renders UserData if inputs are valid", () => {
        render(<Login />);

        const emailInput = screen.getByPlaceholderText('Email');
        const passwordInput = screen.getByPlaceholderText('Password');
        const submitButton = screen.getByText('LOG IN');

        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
        fireEvent.change(passwordInput, { target: { value: 'password' } });
        fireEvent.click(submitButton);

        expect(Login).toHaveBeenCalledWith('test@example.com', 'password');
    })

    test('does not submit the form with empty inputs', () => {
        render(<Login />);
        const submitButton = screen.getByText('LOG IN');
        fireEvent.click(submitButton);

        expect(Login).not.toHaveBeenCalled();
    })
})
