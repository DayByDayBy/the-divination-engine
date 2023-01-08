import React, { useEffect, useState } from "react";
import Card from "./Card";
import Reading from "./Reading";

const Spread = ({ cards }) => {
    return (
        <>
            <div className="spread">
                {cards.length > 0 && cards.map(card => <Card card={card} />)}

            </div>
        </>
    );
}

export default Spread;
