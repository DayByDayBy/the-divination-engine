// import React, { useEffect, useState } from "react";
// import Reading from "./Reading";

// const ReadingArchive = () => {
//     const [readings, setReadings] = useState([]);

//     useEffect(() => {
//         fetch("/readings")
//             .then(response => response.json())
//             .then(data => setReadings(data));
//     }, []);

//     const handleDeleteReading = (readingId) => {
//         fetch(`/readings/delete/${readingId}`, {
//             method: "DELETE"
//         })
//             .then(response => response.json())
//             .then(data => {
//                 if (data.success) {
//                     setReadings(readings.filter(reading => reading._id !== readingId));
//                 }
//             });
//     };

//     const readingsForRender = readings.map((reading) => {
//         return <Reading key={reading._id} reading={reading} onDelete={handleDeleteReading} />;
//     });

//     return(
//         <>
//             <h2>i am an archive of all your readings to date</h2>
//             {readingsForRender}
//         </>
//     )
// };

// export default ReadingArchive;
