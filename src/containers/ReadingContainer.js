import React, { useEffect, useState } from "react";
import Spread from "../components/Spread";
import Reading from "../components/Reading";
import { readingAPI } from "../services/api";

const ReadingContainer = () => {
    const [selectedSpread, setSelectedSpread] = useState('');
    const [cards, setCards] = useState(null);

    const handleSpreadChange = (event) => {
        setSelectedSpread(event.target.value);
    }

    const handleSaveSpread = async () => {
        try {
            const newReading = {
                cardReadings: cards
            };
            await readingAPI.createReading(newReading);
            window.location = '/';
        } catch (error) {
            console.error('Error saving reading:', error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            let cardCount = 0;
            if (selectedSpread === "three-card") {
                cardCount = 3;
            } else if (selectedSpread === "celtic-cross") {
                cardCount = 10;
            }
            
            if (cardCount > 0) {
                try {
                    const cardsData = await readingAPI.getRandomCards(cardCount);
                    const cardReadings = cardsData.map((card, index) => {
                        return {
                            reversed: Math.random() < 0.5,
                            position: index,
                            card: card
                        };
                    });
                    setCards(cardReadings);
                } catch (error) {
                    console.error('Error fetching cards:', error);
                }
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
                    onClick={handleSaveSpread}
                />
                    : null
                }

                {cards ? <Reading cards={cards} /> : null}
            </div>
        </>
    );
}

export default ReadingContainer;