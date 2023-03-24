import React, { useEffect, useState } from "react";
import Card from "./Card";
import Reading from "./Reading";

// const Spread = ({ cards, onSaveSpread }) => {
const Spread = ({ cards }) => {
    const threeCardPosition = 
    [
        "past", 
        "present", 
        "future"
    ];
    const tenCardPosition = 
    [
        "the heart of the matter", 
        "what's Crossing You",
        "the root cause",
        "the recent past",
        "possible outcome",
        "immediate future",
        "you/the querent",
        "the Querent's environment",
        "hopes and fears",
        "the outcome"
    ];

    let cardsForRender = []
    console.log(cardsForRender);
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

    // const handleSaveSpread = () => {
    //     onSaveSpread(cards);
    //   };

    return (
        <>
            <div className={ cardsForRender.length < 4 ? "spread-three" : "spread-ten"}>
                {cardsForRender}
            </div>

            {/* <input type="submit" 
            name="submit" 
            value="Save This Spread" 
            onClick={handleSaveSpread} 
            /> */}
        </>
    );
}

export default Spread;
