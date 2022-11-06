import React from 'react';
import '../styles/ProductCard.css';
import GatheringSwarm from '../images/gatheringSwarm.png';
import HeavyBlow from '../images/heavyBlow.png';
import LifebloodHeart from '../images/lifebloodHeart.png';
import Longnail from '../images/longnail.png';
import QuickFocus from '../images/quickFocus.png';
import SalubraGhost from '../images/salubraGhost.png';
import ShamanStone from '../images/shamanStone.png';
import SteadyBody from '../images/steadyBody.png';

function ProductCard({ item, handleAddItem }) {
    const productName = item.name;
    const productPrice = item.price;
    let finalImage;

    if (productName === "Gathering Swarm") {
        finalImage = GatheringSwarm;
    } else if (productName === "Heavy Blow") {
        finalImage = HeavyBlow;
    } else if (productName === "Lifeblood Heart") {
        finalImage = LifebloodHeart;
    } else if (productName === "Longnail") {
        finalImage = Longnail;
    } else if (productName === "Quick Focus") {
        finalImage = QuickFocus;
    } else if (productName === "Salubra's Blessing") {
        finalImage = SalubraGhost;
    } else if (productName === "Shaman Stone") {
        finalImage = ShamanStone;
    } else if (productName === "Steady Body") {
        finalImage = SteadyBody;
    }

    return (
        <div className="card-container">
            <div className="card-image-container">
                <img className="card-image" src={finalImage} alt={productName} />
            </div>
            <div className="card-info-container">
                <div className="card-name">{productName}</div>
                <div className="card-price">{productPrice} Geo</div>
                <button className="card-button" type="button" onClick={() => handleAddItem(item.name, item.price)}>Add to Cart</button>
            </div>
        </div>
    );
}

export default ProductCard;