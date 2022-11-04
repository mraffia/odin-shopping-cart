import React from 'react';
import '../styles/ShoppingCart.css';

function ShoppingCart({
    cart,
    totalPrice,
    cartDisplay,
    handleAddItem,
    handleRemoveItem,
    handleCloseCartDisplay
}) {

    let modalClass = "modal";
    if (cartDisplay) {
        modalClass += " modal-active";
    }

    return (
        <div id="cart-modal" className={modalClass}>
            <div className="modal-content">
                <div className="modal-header">
                    <div className="close-modal" onClick={() => handleCloseCartDisplay()}>&times;</div>
                    <h2>Your Shopping Cart</h2>
                </div>
                <div className="modal-body">
                    <p>Some text in the Modal Body</p>
                    <p>Total: {totalPrice} Geo</p>
                    <button className="modal-button" type="button">Checkout</button>
                </div>
            </div>
        </div>
    );
}

export default ShoppingCart;
