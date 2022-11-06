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

  it("shows the correct cart notification bubble number when user adds one or multiple items into cart", () => {
    render(<App />);

    const productsPageLink = screen.getByRole("link", { name: "Products" });
    userEvent.click(productsPageLink);
    const addToCart = screen.getAllByRole("button", { name: "Add to cart" });
    userEvent.click(addToCart[0]);

    expect(screen.getByTestId("notify-bubble")).toHaveClass('bubble-active');
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

  it("shows the correct number of items in cart modal when user adds one or more item into cart", () => {
    render(<App />);

    const productsPageLink = screen.getByRole("link", { name: "Products" });
    userEvent.click(productsPageLink);
    const addToCart = screen.getAllByRole("button", { name: "Add to cart" });
    userEvent.click(addToCart[0]);
    userEvent.click(addToCart[1]);
    const navCart = screen.getByTestId("nav-cart");
    userEvent.click(navCart);

    expect(screen.getAllByTestId("cart-item")[0]).toBeInTheDocument();
    expect(screen.getAllByTestId("cart-item")[1]).toBeInTheDocument();
  });

  it("shows the correct total price of all the items in cart modal when user adds one or more item into cart", () => {
    render(<App />);

    const productsPageLink = screen.getByRole("link", { name: "Products" });
    userEvent.click(productsPageLink);
    const addToCart = screen.getAllByRole("button", { name: "Add to cart" });
    userEvent.click(addToCart[0]);
    userEvent.click(addToCart[1]);
    const navCart = screen.getByTestId("nav-cart");
    userEvent.click(navCart);

    expect(screen.getByTestId("modal-total").textContent).toMatch('Total: 650 Geo');
  });

  it("shows the correct quantity of an item in cart modal when user clicked increment or decrement button", () => {
    render(<App />);

    const productsPageLink = screen.getByRole("link", { name: "Products" });
    userEvent.click(productsPageLink);
    const addToCart = screen.getAllByRole("button", { name: "Add to cart" });
    userEvent.click(addToCart[0]);
    const navCart = screen.getByTestId("nav-cart");
    userEvent.click(navCart);
    const increment = screen.getByRole("button", { name: "+" });
    userEvent.click(increment);

    expect(screen.getByTestId("cart-item-quantity").textContent).toMatch('2');

    const decrement = screen.getByRole("button", { name: "-" });
    userEvent.click(decrement);

    expect(screen.getByTestId("cart-item-quantity").textContent).toMatch('1');
  });

  it("shows the correct total price of an item in cart modal when user clicked increment or decrement button", () => {
    render(<App />);

    const productsPageLink = screen.getByRole("link", { name: "Products" });
    userEvent.click(productsPageLink);
    const addToCart = screen.getAllByRole("button", { name: "Add to cart" });
    userEvent.click(addToCart[0]);
    const navCart = screen.getByTestId("nav-cart");
    userEvent.click(navCart);
    const increment = screen.getByRole("button", { name: "+" });
    userEvent.click(increment);

    expect(screen.getByTestId("cart-item-price").textContent).toMatch('600');

    const decrement = screen.getByRole("button", { name: "-" });
    userEvent.click(decrement);

    expect(screen.getByTestId("cart-item-price").textContent).toMatch('300');
  });

});