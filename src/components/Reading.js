import React from "react";
import ReadingContainer from "../containers/ReadingContainer";
import Card from "./Card";
import Spread from "./Spread";


const Reading = ({ cards = [] }) => {
    return (

        <div className="reading">
            {cards.map(card => {
                return (
                    <div>
                        <h3>{card.name}</h3>
                        <p>{card.meaning_up}</p>
                    </div>
                );
            })}
        </div>

    );
};

export default Reading;