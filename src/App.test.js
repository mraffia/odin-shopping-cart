import React from "react";
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import App from './App';

describe("App component", () => {
  it("renders header/nav, HomePage content, and footer", () => {
    const { container } = render(<App />);

    expect(container).toMatchSnapshot();
  });

  it("shows cart modal after cart logo in nav is clicked", () => {
    render(<App />);

    const navCart = screen.getByTestId("nav-cart");
    userEvent.click(navCart);

    expect(screen.getByTestId("cart-modal")).toHaveClass('modal-active');
  });

  it("shows no cart notification bubble there's no item in cart", () => {
    render(<App />);

    expect(screen.getByTestId("notify-bubble")).not.toHaveClass('bubble-active');
  });

  it("shows cart notification bubble when user adds an item into cart", () => {
    render(<App />);

    const productsPageLink = screen.getByRole("link", { name: "Products" });
    userEvent.click(productsPageLink);
    const addToCart = screen.getAllByRole("button", { name: "Add to cart" });
    userEvent.click(addToCart[0]);

    expect(screen.getByTestId("notify-bubble")).toHaveClass('bubble-active');;
    expect(screen.getByTestId("notify-bubble").textContent).toMatch('1');
  });

  it("shows the correct cart notification bubble number when user adds one or multiple items into cart", () => {
    render(<App />);

    const productsPageLink = screen.getByRole("link", { name: "Products" });
    userEvent.click(productsPageLink);
    const addToCart = screen.getAllByRole("button", { name: "Add to cart" });
    userEvent.click(addToCart[0]);

    expect(screen.getByTestId("notify-bubble").textContent).toMatch('1');
    
    userEvent.click(addToCart[1]);
    userEvent.click(addToCart[2]);

    expect(screen.getByTestId("notify-bubble").textContent).toMatch('3');
  });

  it("closes cart modal after cart modal's close button is clicked", () => {
    render(<App />);

    const navCart = screen.getByTestId("nav-cart");
    userEvent.click(navCart);

    expect(screen.getByTestId("cart-modal")).toHaveClass('modal-active');

    const closeModal = screen.getByTestId("close-modal");
    userEvent.click(closeModal);

    expect(screen.getByTestId("cart-modal")).not.toHaveClass('modal-active');
  });

});