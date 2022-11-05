import React from 'react';
import '../styles/ShoppingCart.css';
import GatheringSwarm from '../images/gatheringSwarm.png';
import HeavyBlow from '../images/heavyBlow.png';
import LifebloodHeart from '../images/lifebloodHeart.png';
import Longnail from '../images/longnail.png';
import QuickFocus from '../images/quickFocus.png';
import SalubraGhost from '../images/salubraGhost.png';
import ShamanStone from '../images/shamanStone.png';
import SteadyBody from '../images/steadyBody.png';

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
                    <span className="close-modal" onClick={() => handleCloseCartDisplay()}>&times;</span>
                    <h2 className="modal-title">Your Shopping Cart</h2>
                </div>      
                <div className="modal-body">
                    {cart.map((item, i) => {
                        let itemPrice = item.total / item.quantity;
                        let finalImage;

                        if (item.name === "Gathering Swarm") {
                            finalImage = GatheringSwarm;
                        } else if (item.name === "Heavy Blow") {
                            finalImage = HeavyBlow;
                        } else if (item.name === "Lifeblood Heart") {
                            finalImage = LifebloodHeart;
                        } else if (item.name === "Longnail") {
                            finalImage = Longnail;
                        } else if (item.name === "Quick Focus") {
                            finalImage = QuickFocus;
                        } else if (item.name === "Salubra's Blessing") {
                            finalImage = SalubraGhost;
                        } else if (item.name === "Shaman Stone") {
                            finalImage = ShamanStone;
                        } else if (item.name === "Steady Body") {
                            finalImage = SteadyBody;
                        }

                        return (
                            <div key={i} className="cart-item-container">
                                <div className="cart-item-image-container">
                                    <img className="cart-item-image" src={finalImage} alt={item.name} />
                                </div>
                                <div className="cart-item-info-container">
                                    <div className="cart-item-name">{item.name}</div>
                                    <div className="cart-item-price">{item.total} Geo</div>
                                </div>
                                <div className="cart-item-counter-container">
                                    <button className="increment-button" type="button" onClick={() => handleAddItem(item.name, itemPrice)}>+</button>
                                    <div className="cart-item-quantity">{item.quantity}</div>
                                    <button className="decrement-button" type="button" onClick={() => handleRemoveItem(item.name, itemPrice)}>-</button>
                                </div>
                            </div>
                        )
                    })}
                    <div className="modal-total">Total: {totalPrice} Geo</div>
                    <button className="modal-button" type="button">Checkout</button>
                </div>
            </div>
        </div>
    );
}

export default ShoppingCart;
