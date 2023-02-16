import React from "react";

const Card = ({card}) => {
    const imgPath = require(`../images/${card.name_short}.jpg`);


    return (
        <>
            <div className="card-object">
                <div className="card">
                <img src={imgPath} alt={card.name} />
                </div>
                <div className="name-of-card">
                <h2>{card.name}</h2>
                </div>
            </div>
        </>
    );
}

export default Card;
