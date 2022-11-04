import React from 'react';
import '../styles/ProductsPage.css';
import ProductCard from './ProductCard.js';

function ProductsPage({ items }) {
  return (
    <div className="products-container">
        <div className="products-subcontainer">
          {items.map((item, i) => {
            return (
              <div key={i}>
                <ProductCard item={item} />
              </div>
            )
          })}
        </div>
    </div>
  );
}

export default ProductsPage;
