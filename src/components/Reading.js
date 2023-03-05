import React from "react";




const Reading = ({ cards = [] }) => {
    return (

        <div className="meanings">
            {cards.map(card => {
                return (
                    <div className = "meaning">
                        <h3>{card.name}</h3>
                        <p>{card.meaningUp}</p>
                    </div>
                );
            })}
        </div>

    );
};

export default Reading;