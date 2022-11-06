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
  it("renders header/nav, HomePage content, and footer", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  it("shows cart modal after cart logo in nav is clicked", () => {
    render(<App />);
    const cart = screen.getByTestId("nav-cart");

    userEvent.click(cart);

    expect(screen.getByTestId("cart-modal")).toBeVisible();
  });

  it("shows cart notification bubble when some item's 'Add to cart' button is clicked and item goes into cart", () => {
    render(<App />);
    const productsPageLink = screen.getByRole("link", { name: "Products" });
    userEvent.click(productsPageLink);

    const addToCart = screen.getAllByRole("button", { name: "Add to cart" });
    userEvent.click(addToCart[0]);

    expect(screen.getByTestId("notify-bubble")).toBeVisible();
  });

});