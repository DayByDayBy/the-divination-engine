import React from "react";
import PropTypes from "prop-types";

const Reading = ({ cards = [] }) => {
    return (

        <div className="meanings">
            {cards.map((card, index) => {
                return (
                    <div key={index} className = "meaning">
                        <h3>{card.card.name}</h3>
                        <p>{card.reversed ? card.card.meaningRev : card.card.meaningUp }</p>
                    </div>
                );
            })}
        </div>

    );
};

Reading.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.shape({
        card: PropTypes.shape({
            name: PropTypes.string.isRequired,
            meaningUp: PropTypes.string,
            meaningRev: PropTypes.string
        }).isRequired,
        reversed: PropTypes.bool.isRequired
    }))
};

Reading.defaultProps = {
    cards: []
};

export default Reading;