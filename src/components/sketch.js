import React from "react";

const Card = ({ card }) => {
  return (
    <div className="card">
      <h2>{card.name}</h2>
      <img src={card.img} alt={card.name} />
      <p>{card.description}</p>
    </div>
  );
};

export default Card;














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




















const Card = ({ cards }) => {


  return (
    <div className="card-container">
      {cards.map(card => {
        return (
          <div className="card">
            {/* Render card information here */}
          </div>
        );
      })}
    </div>
  );
}














const Card = ({ card }) => {
  return (
    <div className="card">
      {card.map((card) => (
        <div key={card.id}>
          <h3>{card.name}</h3>
          <img src={card.image} alt={card.name} />
        </div>
      ))}
    </div>
  );
};





<div className="card">
                <img src={`/images/${card.name_short}.jpg`} alt={card.name} />
                </div>
                <div className="name-of-card">
                <h2>{card.name}</h2>





                <Card card={cards} />