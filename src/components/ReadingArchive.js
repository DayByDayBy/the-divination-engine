import React from 'react';
import { useState, useEffect } from 'react';
import Reading from './Reading';

const ReadingArchive = () => {
  const [readings, setReadings] = useState([]);

 useEffect(() => {
        fetch("/readings/all")
            .then(response => response.json())
            .then(data => setReadings(data));
            
    }, []);


    const handleDeleteReading = (readingId) => {
        fetch(`/readings/${readingId}`, {
            method: "DELETE"
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    setReadings(readings.filter(reading => reading._id !== readingId));
                }
            });
    };

    const readingsForRender = readings.map((reading) => {
        return <Reading key={reading._id} reading={reading} onDelete={handleDeleteReading} />;
    });
    console.log(readingsForRender);


  return (
    <>
      <h2>i am an archive of all your readings to date</h2>
      {readingsForRender}
      
    </>
  )
};

export default ReadingArchive;
