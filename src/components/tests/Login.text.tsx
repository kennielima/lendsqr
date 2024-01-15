import Login from "../Authentication/Login";
import '@testing-library/jest-dom';
import { act, render, screen } from '@testing-library/react';
import test, { describe } from "node:test";
import userEvent from '@testing-library/user-event';

describe('Login Component', () => {
    test('render Login Page', () => {
        render(<Login />);
        act(() => {
            const button = screen.getByRole('button')
            userEvent.click(button)
        })
        // const output = screen.getBy
    })
})