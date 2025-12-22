import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Spread from "../components/Spread.jsx";
import Reading from "../components/Reading.jsx";
import { readingAPI } from "../services/api";
import { SPREAD_TYPES, SPREAD_CARD_COUNTS, UI_TEXT, ERROR_MESSAGES } from "../constants/index.jsx";

const ReadingContainer = () => {
    const [selectedSpread, setSelectedSpread] = useState('');
    const [cards, setCards] = useState(null);
    const [saving, setSaving] = useState(false);
    const [saveMessage, setSaveMessage] = useState('');
    const navigate = useNavigate();

    const handleSpreadChange = (event) => {
        setSelectedSpread(event.target.value);
    }

    const handleSaveSpread = async () => {
        try {
            setSaving(true);
            const newReading = {
                cardReadings: cards
            };
            await readingAPI.createReading(newReading);
            setSaveMessage(UI_TEXT.SAVE_SUCCESS);
            setTimeout(() => {
                navigate('/archive');
            }, 1000);
        } catch (error) {
            console.error(ERROR_MESSAGES.SAVE_READING_FAILED, error);
            setSaveMessage(UI_TEXT.SAVE_FAILED);
        } finally {
            setSaving(false);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const cardCount = SPREAD_CARD_COUNTS[selectedSpread];
            console.log('Debug - selectedSpread:', selectedSpread, 'cardCount:', cardCount);
            
            if (cardCount > 0) {
                try {
                    console.log('Debug - fetching', cardCount, 'cards...');
                    const cardsData = await readingAPI.getRandomCards(cardCount);
                    console.log('Debug - API response:', cardsData);
                    const cardReadings = cardsData.map((card, index) => {
                        return {
                            reversed: Math.random() < 0.5,
                            position: index,
                            card: card
                        };
                    });
                    console.log('Debug - cardReadings:', cardReadings);
                    setCards(cardReadings);
                } catch (error) {
                    console.error(ERROR_MESSAGES.FETCH_CARDS_FAILED, error);
                }
            }
        };

        fetchData();
    }, [selectedSpread]);


    console.log('Debug - render cards:', cards);
    
    return (
        <div className="reading-container">
            <div className="reading-dropdown">
                <select value={selectedSpread} onChange={handleSpreadChange}>
                    <option value="">{UI_TEXT.SELECT_SPREAD}</option>
                    <option value={SPREAD_TYPES.THREE_CARD}>{UI_TEXT.THREE_CARD_LABEL}</option>
                    <option value={SPREAD_TYPES.CELTIC_CROSS}>{UI_TEXT.CELTIC_CROSS_LABEL}</option>
                </select>
            </div>

            {saveMessage && (
                <div className={`message ${saveMessage === UI_TEXT.SAVE_SUCCESS ? 'success' : 'error'}`}>
                    {saveMessage}
                </div>
            )}

            {cards ? (
                <>
                    <Spread
                        spread={selectedSpread}
                        cards={cards}
                    />
                    <div className="reading-actions">
                        <input 
                            type="submit"
                            className="save-button"
                            name="submit"
                            value={saving ? UI_TEXT.SAVING : UI_TEXT.SAVE_SPREAD}
                            onClick={handleSaveSpread}
                            disabled={saving}
                        />
                    </div>
                    <Reading cards={cards} />
                </>
            ) : selectedSpread ? (
                <div className="loading">{UI_TEXT.LOADING}</div>
            ) : null}
        </div>
    );
}

export default ReadingContainer;