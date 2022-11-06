import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductsPage from '../components/ProductsPage.js';

describe("ProductsPage component", () => {
    it("renders ProductsPage content", () => {
        const items = [
            { name: "Gathering Swarm", price: 300 },
            { name: "Heavy Blow", price: 350 },
            { name: "Lifeblood Heart", price: 250 },
            { name: "Longnail", price: 300 },
            { name: "Quick Focus", price: 800 },
            { name: "Salubra's Blessing", price: 800 },
            { name: "Shaman Stone", price: 220 },
            { name: "Steady Body", price: 120 },
        ];
        const { container } = render(<ProductsPage items={items} />);
    
        expect(container).toMatchSnapshot();
    });
});