import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import ShoppingCart from '../components/ShoppingCart.js';

describe("ShoppingCart component", () => {
    it("calls handleCloseCartDisplay correct number of times", () => {
        const cart = [];
        const handleCloseCartDisplayMock = jest.fn();
        render(<ShoppingCart cart={cart} handleCloseCartDisplay={handleCloseCartDisplayMock} />);
        const closeModal = screen.getByTestId("close-modal");

        userEvent.click(closeModal);

        expect(handleCloseCartDisplayMock).toHaveBeenCalledTimes(1);
    });

    it("calls handleAddItem correct number of times", () => {
        const cart = [{ name: "Gathering Swarm", quantity: 1, total: 300 }];
        const handleAddItemMock = jest.fn();
        render(<ShoppingCart cart={cart} handleAddItem={handleAddItemMock} />);
        const increment = screen.getByRole("button", { name: "+" });

        userEvent.click(increment);

        expect(handleAddItemMock).toHaveBeenCalledTimes(1);
    });

    it("calls handleRemoveItem correct number of times", () => {
        const cart = [{ name: "Gathering Swarm", quantity: 1, total: 300 }];
        const handleRemoveItemMock = jest.fn();
        render(<ShoppingCart cart={cart} handleRemoveItem={handleRemoveItemMock} />);
        const decrement = screen.getByRole("button", { name: "-" });

        userEvent.click(decrement);

        expect(handleRemoveItemMock).toHaveBeenCalledTimes(1);
    });
});