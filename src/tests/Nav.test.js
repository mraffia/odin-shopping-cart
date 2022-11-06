import React from "react";
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import App from './App';
import Nav from '../components/Nav';

// describe("Nav component", () => {
//     it("renders header/nav, content, and footer", () => {
//       const { container } = render(<App />);
//       expect(container).toMatchSnapshot();
//     });
  
//     it("renders radical rhinos after button click", () => {
//       render(<App />);
//       const button = screen.getByRole("button", { name: "Click Me" });
  
//       userEvent.click(button);
  
//       expect(screen.getByRole("heading").textContent).toMatch(/radical rhinos/i);
//     });
// });