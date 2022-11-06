import React from "react";
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe("App component", () => {
  it("renders header/nav, content, and footer", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  // it("shows cart modal after cart link in nav is clicked", () => {
  //   render(<App />);
  //   const cart = screen.getByTestId("nav-cart");

  //   userEvent.click(cart);

  //   expect(screen.getByTestId("cart-modal")).toBeVisible();
  // });
});