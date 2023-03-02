import React, { useEffect, useState } from "react";
import Card from "./Card";
import Reading from "./Reading";





    

const Spread = ({ cards, handleSaveSpread }) => {
    const threeCardPosition = 
    [
        "Past", 
        "Present", 
        "Future"
    ];
    const tenCardPosition = 
    [
        "The Heart of The Matter", 
        "What's Crossing You",
        "The Root Cause",
        "The Recent Past",
        "Possible Outcome",
        "Immediate Future",
        "You/The Querent",
        "The Querent's Environment",
        "Hopes and Fears",
        "The Outcome"
    ];

    let cardsForRender

    if(cards.length > 0){
        cardsForRender = cards.map((card, index) => {
            console.log(card);
            let cardDescription = null;

            if (cards.length === 3) {
                cardDescription = threeCardPosition[index];
            } else {
                cardDescription = tenCardPosition[index];
            }

            return <Card card={card} cardDescription={cardDescription} />
        });
    }

    const handleSaveSpread = () => {
        onSaveSpread(cards);
      };


    return (
        <>
            <div className="spread">{cardsForRender}</div>

            <input type="submit" 
            name="submit" 
            value="Save This Spread" 
            onClick={handleSaveSpread} 
            />
    

        </>
    );
}

export default Spread;
