import React from "react";

const Card = ({card, cardDescription}) => {
    const imgPath = require(`../images/${card.nameShort}.jpg`);


    return (
        <>
            <div className="card-object">
                <div className="card">
                <img src={imgPath} alt={card.name} />
                <p className="cardDescription">{cardDescription}</p>
                </div>
                <div className="name-of-card">
                </div>
            </div>
        </>
    );
}

export default Card;
