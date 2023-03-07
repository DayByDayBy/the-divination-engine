import React from "react";


const Card = ({card, cardDescription }) => {
    const imgPath = require(`../images/${card.card.nameShort}.jpg`);


    return (
        <>
            <div className="card-object">
                <div className= {card.reversed ? "card-reverse" :"card"}>
                <img src={imgPath} alt={card.card.name} />
                </div>
                <p className="cardDescription">{cardDescription}</p>
                <div className="name-of-card">
                </div>
            </div>
        </>
    );
}

export default Card;
