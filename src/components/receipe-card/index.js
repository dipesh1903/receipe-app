import React from 'react';
import {useSelector} from 'react-redux';
import './style.scss';

function ReceipeCard(props) {
    
    const {
        receipeData,
        onClick,
        styles,
        onHover
    } = props;

    console.log(receipeData);

    const {
        id,
        name,
        category,
        price,
        image,
        description
    } = receipeData;

    return (
        <div className="receipe-card-container">
            <div className="image">
                <img src={image} alt="Receipe image"/>
            </div>
            <div className="content">
                <div className="details">
                    <div className="name">
                        {name}
                    </div>
                    <div className="price">
                       &#8377; {price}
                    </div>
                </div>
                <button onClick={(e) => onClick(e,price)} className="buy-now">Buy now</button>
            </div>
        </div>
    )
}

export default ReceipeCard;
