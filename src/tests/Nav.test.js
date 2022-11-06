import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from 'react-router-dom';
import Nav from '../components/Nav.js';

describe("Nav component", () => {
    it("calls handleOpenCartDisplay correct number of times", () => {
        const handleOpenCartDisplayMock = jest.fn();
        render(<Nav handleOpenCartDisplay={handleOpenCartDisplayMock} />, {wrapper: BrowserRouter});
        const navCart = screen.getByTestId("nav-cart");
    
        userEvent.click(navCart);
    
        expect(handleOpenCartDisplayMock).toHaveBeenCalledTimes(1);
    });
});