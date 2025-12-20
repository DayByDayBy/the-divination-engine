import React from "react";
import PropTypes from "prop-types";
import Card from "./Card.jsx";
import { CARD_POSITIONS, SPREAD_CARD_COUNTS, SPREAD_TYPES } from "../constants/index.js";

const Spread = ({ cards }) => {

    let cardsForRender = []
    if(cards.length > 0){
        cardsForRender = cards.map((card, index) => {
            let cardDescription = null;

            if (cards.length === SPREAD_CARD_COUNTS[SPREAD_TYPES.THREE_CARD]) {
                cardDescription = CARD_POSITIONS.THREE_CARD[index];
            } else {
                cardDescription = CARD_POSITIONS.CELTIC_CROSS[index];
            }
            return <Card key={index} card={card} cardDescription={cardDescription} />
        });
    }

    return (
        <div className={ cardsForRender.length < 4 ? "spread-three" : "spread-ten"}>
            {cardsForRender}
        </div>
    );
}

Spread.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.shape({
        card: PropTypes.shape({
            nameShort: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        }).isRequired,
        reversed: PropTypes.bool.isRequired
    })).isRequired
};

export default Spread;
