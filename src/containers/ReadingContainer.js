import React, { useEffect, useState } from "react";
import Spread from "../components/Spread";
import Reading from "../components/Reading";

const ReadingContainer = () => {
    const [selectedSpread, setSelectedSpread] = useState('');
    const [cards, setCards] = useState(null);

    const handleSpreadChange = (event) => {
        setSelectedSpread(event.target.value);
    }

    const handleSaveSpread = async () => {
        const newReading = {
            cardReadings: cards
        }
        await fetch("/api/readings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newReading),
        });
        window.location = '/'
    };

    useEffect(() => {
        const fetchData = async () => {
            let apiLink = "";
            if (selectedSpread === "three-card") {
                apiLink = "/api/reading/3";
            } else if (selectedSpread === "celtic-cross") {
                apiLink = "/api/reading/10";
            }
            if (apiLink) {
                fetch(apiLink)
                    .then((res) => res.json())
                    .then((info) => {
                        const cardReadings = info.map((card, index) => {
                            return {
                                reversed: Math.random() < 0.5,
                                position: index,
                                card: card
                            }
                        })
                        setCards(cardReadings)
                    })
            }
        };

        fetchData();
    }, [selectedSpread]);


    return (
        <>
                 <h1> The DIVINATION ENGINE </h1>

            <div className="reading-container">

                <div className="reading-dropdown">
                    <select value={selectedSpread} onChange={handleSpreadChange}>
                        <option value="">Select A Spread:</option>
                        <option value="three-card">Three-Card Spread</option>
                        <option value="celtic-cross">Celtic Cross Spread</option>
                    </select>
                </div>

                {cards ? <Spread
                    spread={selectedSpread}
                    cards={cards}
                /> : null}

                {cards ? <input type="submit"
                    name="submit"
                    value="Save This Spread"
                />
                    : null
                }

                {cards ? <Reading cards={cards} /> : null}
            </div>
        </>
    );
}

export default ReadingContainer;