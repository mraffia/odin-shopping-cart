import React from 'react';
import '../styles/ProductsPage.css';
import ProductCard from './ProductCard.js';

function ProductsPage({ items, handleAddItem }) {
  return (
    <div className="products-container">
        <div className="products-subcontainer">
          {items.map((item, i) => {
            return (
              <div key={i}>
                <ProductCard item={item} handleAddItem={handleAddItem} />
              </div>
            )
          })}
        </div>
    </div>
  );
}

export default ProductsPage;
