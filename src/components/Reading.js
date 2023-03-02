import React from "react";
import ReadingContainer from "../containers/ReadingContainer";
import Card from "./Card";
import Spread from "./Spread";



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