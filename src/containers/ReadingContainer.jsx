import React, { useEffect, useState } from "react";
import Spread from "../components/Spread.jsx";
import Reading from "../components/Reading.jsx";
import { readingAPI } from "../services/api";
import { SPREAD_TYPES, SPREAD_CARD_COUNTS, UI_TEXT, ERROR_MESSAGES } from "../constants/index.js";

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
            console.error(ERROR_MESSAGES.SAVE_READING_FAILED, error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const cardCount = SPREAD_CARD_COUNTS[selectedSpread];
            
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
                    console.error(ERROR_MESSAGES.FETCH_CARDS_FAILED, error);
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
                        <option value="">{UI_TEXT.SELECT_SPREAD}</option>
                        <option value={SPREAD_TYPES.THREE_CARD}>{UI_TEXT.THREE_CARD_LABEL}</option>
                        <option value={SPREAD_TYPES.CELTIC_CROSS}>{UI_TEXT.CELTIC_CROSS_LABEL}</option>
                    </select>
                </div>

                {cards ? <Spread
                    spread={selectedSpread}
                    cards={cards}
                /> : null}

                {cards ? <input type="submit"
                    name="submit"
                    value={UI_TEXT.SAVE_SPREAD}
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