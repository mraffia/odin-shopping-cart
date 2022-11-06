import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from 'react-router-dom';
import HomePage from '../components/HomePage.js';

describe("HomePage component", () => {
    it("renders HomePage content", () => {
        const { container } = render(<HomePage />, {wrapper: BrowserRouter});
    
        expect(container).toMatchSnapshot();
    });
});