import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import ProductCard from '../components/ProductCard.js';

describe("ProductCard component", () => {
    it("calls handleOpenCartDisplay correct number of times", () => {
        const item = { name: "Gathering Swarm", price: 300 };
        const handleAddItemMock = jest.fn();
        render(<ProductCard item={item} handleAddItem={handleAddItemMock} />);
        const addToCart = screen.getByRole("button", { name: "Add to Cart" });
    
        userEvent.click(addToCart);
    
        expect(handleAddItemMock).toHaveBeenCalledTimes(1);
    });
});