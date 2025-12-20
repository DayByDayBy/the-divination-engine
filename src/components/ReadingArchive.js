import React from 'react';
import { useState, useEffect } from 'react';
import ArchivedReadingList from './ArchivedReadingList';
import { Routes, Route, useParams } from "react-router-dom";
import ArchiveItem from './ArchiveItem';
import { readingAPI } from '../services/api';

const ReadingArchive = () => {
  const [readings, setReadings] = useState([]);

  useEffect(() => {
    const fetchReadings = async () => {
      try {
        const data = await readingAPI.getAllReadings();
        console.log(data);
        setReadings(data);
      } catch (error) {
        console.error('Error fetching readings:', error);
      }
    };
    
    fetchReadings();
  }, []);
  

    const handleDeleteReading = async (readingId) => {
      console.log("Deleting reading with ID", readingId);
      try {
        await readingAPI.deleteReading(readingId);
        setReadings(readings.filter(reading => reading.id !== readingId));
        window.location = '/archive';
      } catch (error) {
        console.error('Error deleting reading:', error);
      }
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
