// import React, { useEffect, useState } from "react";
// import Card from "./Card";
// import Reading from "./Reading";
// import axios from "axios";

// const Spread = ({ cards }) => {
//   const threeCardPosition = ["Past", "Present", "Future"];
//   const tenCardPosition = [
//     "The Heart of The Matter",
//     "What's Crossing You",
//     "The Root Cause",
//     "The Recent Past",
//     "Possible Outcome",
//     "Immediate Future",
//     "You/The Querent",
//     "The Querent's Environment",
//     "Hopes and Fears",
//     "The Outcome",
//   ];

//   const [spreadName, setSpreadName] = useState("");
//   const [spreadSaved, setSpreadSaved] = useState(false);

//   const handleSave = () => {
//     axios
//       .post("/saveSpread", { spreadName, cards })
//       .then((response) => {
//         console.log(response.data); // log the response from the backend
//         setSpreadSaved(true);
//       })
//       .catch((error) => {
//         console.error(error); // log any errors that occur during the request
//       });
//   };

//   let cardsForRender;

//   if (cards.length > 0) {
//     cardsForRender = cards.map((card, index) => {
//       console.log(card);
//       let cardDescription = null;

//       if (cards.length === 3) {
//         cardDescription = threeCardPosition[index];
//       } else {
//         cardDescription = tenCardPosition[index];
//       }

//       return <Card card={card} cardDescription={cardDescription} />;
//     });
//   }

//   return (
//     <>
//       <div className="spread">{cardsForRender}</div>

//       {!spreadSaved && (
//         <>
//           <input
//             type="text"
//             value={spreadName}
//             onChange={(e) => setSpreadName(e.target.value)}
//             placeholder="Spread Name"
//           />
//           <input type="submit" value="Save This Spread" onClick={handleSave} />
//         </>
//       )}
//       {spreadSaved && <p>Spread Saved!</p>}
//     </>
//   );
// };

// export default Spread;
