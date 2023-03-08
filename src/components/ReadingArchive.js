import React from 'react';
import { useState, useEffect } from 'react';
import ArchivedReadingList from './ArchivedReadingList';
import { Routes, Route, useParams } from "react-router-dom";
import ArchiveItem from './ArchiveItem';

const ReadingArchive = () => {
  const [readings, setReadings] = useState([]);

  useEffect(() => {
    fetch("/api/readings")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setReadings(data);
      })
      .catch(error => {
        console.log(error); 
      });
  }, []);
  

    const handleDeleteReading = (readingId) => {
      console.log("Deleting reading with ID", readingId);
        fetch(`/api/readings/${readingId}`, {
            method: "DELETE"
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    setReadings(readings.filter(reading => reading.id !== readingId));
                }
                window.location = '/archive'
            });
    };

    // const readingsForRender = readings.map((reading, index) => {
    //     return <ArchivedReadingList key={reading.id} reading={reading} index={index} onDelete={handleDeleteReading} />;
    // });



const RenderArchiveItem = ({onDelete}) => {
  const { id } = useParams();
  let chosenReading = {}

  for(let reading of readings){
    if(reading.id === parseInt(id)){
      chosenReading = reading
    }
  }
  return <ArchiveItem reading={chosenReading} id={id} onDelete={onDelete} />;
};

  return (

    <>
     
      <Routes>
        <Route path="/" element={ <ArchivedReadingList readings={readings} handleDeleteReading={handleDeleteReading} /> } />
        <Route path="/:id" element={<RenderArchiveItem onDelete={handleDeleteReading}/>} />

      </Routes>
    </>
  )
};

export default ReadingArchive;
