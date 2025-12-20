import React from "react";
import PropTypes from "prop-types";

const Card = ({ card, cardDescription }) => {
    const imgPath = require(`../images/${card.card.nameShort}.jpg`);

    return (
        <>
            <div className="card-object">
                <div className={card.reversed ? "card-reverse" : "card"}>
                    <img src={imgPath} alt={card.card.name} />
                </div>
                <p className="cardDescription">{cardDescription}</p> 
                <div className="name-of-card">
                </div>
            </div>
        </>
    );
}

Card.propTypes = {
    card: PropTypes.shape({
        card: PropTypes.shape({
            nameShort: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        }).isRequired,
        reversed: PropTypes.bool.isRequired
    }).isRequired,
    cardDescription: PropTypes.string
};

export default Card;