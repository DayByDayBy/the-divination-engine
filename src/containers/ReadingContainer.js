import React, { useEffect, useState } from "react";
import Spread from "../components/Spread";
import Reading from "../components/Reading";
import Card from "../components/Card";

const ReadingContainer = () => {
    const [selectedSpread, setSelectedSpread] = useState('');  // this is selecting the spread - 3 or 10
    const [selectedTopic, setSelectedTopic] = useState('');     // this is selecting the topic - does nothing atm 
    const [cards, setCards] = useState([]);


    const handleSpreadChange = (event) => {
        setSelectedSpread(event.target.value);
    }

    const handleTopicChange = event => {
        setSelectedTopic(event.target.value);
    }


    const handleSubmit = () => {
        setCards([]);
        setSelectedTopic("");
    };

    useEffect(() => {
        const fetchData = async () => {
            console.log("Fetching...");
            let apiLink = "";
            if (selectedSpread === "three-card") {
                apiLink = "https://tarot-api-3hv5.onrender.com/api/v1/cards/random?n=3";
            } else if (selectedSpread === "celtic-cross") {
                apiLink = "https://tarot-api-3hv5.onrender.com/api/v1/cards/random?n=10";
            }

            if (apiLink) {
                const data = await fetch(apiLink).then((res) => res.json());
                console.log("data from API:", data);
                setCards(data);
            }
        };
        console.log(useEffect);

        fetchData();
    }, [selectedSpread]);


    return (
        <>

            <div className="reading-container">

                <div>
                    <select value={selectedSpread} onChange={handleSpreadChange}>
                        <option value="">Select A Spread</option>
                        <option value="three-card">Three-Card Spread</option>
                        <option value="celtic-cross">Celtic Cross Spread</option>
                    </select>
                    {cards.length > 0 && <Card card={cards} />}
                </div>

                <select value={selectedTopic} onChange={handleTopicChange}>
                    <option value="">Select A Topic</option>
                    <option value='love'>love</option>
                    <option value='life'>life</option>
                    <option value='work'>work</option>
                    <option value='code'>code</option>
                    <option value='money'>money</option>
                </select>

                <button type="submit" onClick={handleSubmit}>
                    Get a Reading
                </button>

                <Spread
                    spread={selectedSpread}
                    topic={selectedTopic}
                    cards={cards}
                />

                <Reading />
            </div>
        </>
    );
}

export default ReadingContainer;