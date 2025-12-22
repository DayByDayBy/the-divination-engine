import React from "react";
import PropTypes from "prop-types";

const Card = ({ card, cardDescription }) => {
    // Use import.meta.glob for Vite to handle dynamic images
    const images = import.meta.glob('../images/*.jpg', { eager: true });
    const imgPath = images[`../images/${card.card.nameShort}.jpg`]?.default || '';

    return (
        <>
            <div className="card-object">
                <div className={card.reversed ? "card-reverse" : "card"}>
                    {imgPath ? <img src={imgPath} alt={card.card.name} /> : <div className="no-image">No Image</div>}
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