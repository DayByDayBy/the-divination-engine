import React, { useEffect, useState } from "react";
import Spread from "../components/Spread";
import Reading from "../components/Reading";

const ReadingContainer = () => {
    const [selectedSpread, setSelectedSpread] = useState('');  // this is selecting the spread - 3 or 10
    // const [selectedTopic, setSelectedTopic] = useState('');     // this is selecting the topic - does nothing atm 
    const [cards, setCards] = useState(null);   

    const handleSpreadChange = (event) => {
        setSelectedSpread(event.target.value);
    }

    // const handleTopicChange = event => {
    //     setSelectedTopic(event.target.value);
    // }


    // const handleSubmit = () => {
    //     evt.preventDefault()

    // };

    const handleSaveSpread = async () => {
        const cardInReading = cards.map((card, index) => {
            // const reversed = Math.random() < 0.5; 
            return {
                card
            }
        })
        
        const newReading = {

        }
        const response = await fetch("/api/readings", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newReading.cardReadings),
        });
    
        if (response.ok) {
      
        } else {
          // return error stuff
        }
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
                const data = fetch(apiLink)
                .then((res) => res.json())
                .then((info) => {
                    const cardReadings = info.map((card, index) => {
                        return {
                            reversed: Math.random() < 0.5,
                            position: index,
                            card: card
                        }
                    })
                    setCards(cardReadings)})
                   
            }
        };

        fetchData();
    }, [selectedSpread]);


    return (
        <>

            <div className="reading-container">

            <div className="reading-dropdown">
                    <select value={selectedSpread} onChange={handleSpreadChange}>
                        <option value="">Select A Spread</option>
                        <option value="three-card">Three-Card Spread</option>
                        <option value="celtic-cross">Celtic Cross Spread</option>
                    </select>
                    {/* {cards.length > 0 && <Card card={cards} />} */}
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

                
{/* 
                <select value={selectedTopic} onChange={handleTopicChange}>
                    <option value="">Select A Topic</option>
                    <option value='love'>love</option>
                    <option value='life'>life</option>
                    <option value='work'>work</option>
                    <option value='code'>code</option>
                    <option value='money'>money</option>
                </select> */}
{/* 
                <button type="submit" onClick={handleSubmit}>
                    Get a Reading
                </button> */}



                {cards ? <Reading cards={cards} /> : null}



                
            </div>
        </>
    );
}

export default ReadingContainer;