import React, { useEffect, useState } from "react";
import Card from "./Card";
import Reading from "./Reading";

const Spread = ({ cards }) => {
    let cardsForRender

    if(cards.length > 0){
        cardsForRender = cards.map((card) => {
            console.log(card);
            return <Card card={card}/>
        })
    }
    return (
        <>
            <div className="spread">
                {cardsForRender}

            </div>
        </>
    );
}

export default Spread;
