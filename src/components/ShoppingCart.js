import React from 'react';
import '../styles/ShoppingCart.css';

function ShoppingCart({
    cart,
    totalPrice,
    cartDisplay,
    handleAddItem,
    handleRemoveItem,
    handleOpenCartDisplay,
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
                    <span className="close-modal">&times;</span>
                    <h2>Modal Header</h2>
                </div>
                <div className="modal-body">
                    <p>Some text in the Modal Body</p>
                    <p>Some other text...</p>
                </div>
                <div className="modal-footer">
                    <h3>Modal Footer</h3>
                </div>
            </div>
        </div>
    );
}

export default ShoppingCart;
