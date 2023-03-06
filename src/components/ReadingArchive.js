import React from 'react';
import { useState, useEffect, handleDelete } from 'react';
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

    // const readingsForRender = readings.map((reading, index) => {
    //     return <ArchivedReadingList key={reading.id} reading={reading} index={index} onDelete={handleDeleteReading} />;
    // });
    // console.log(readingsForRender);



const RenderArchiveItem = () => {
  const { id } = useParams();
  let chosenReading = {}

  for(let reading of readings){
    if(reading.id === parseInt(id)){
      chosenReading = reading
    }
  }

  return <ArchiveItem reading={chosenReading} handleDelete={handleDelete} />;
};

  return (
    // <>
    //   <h2>i am an archive of all your readings to date</h2>
    //   {/* {readingsForRender} */}
    //   <ArchivedReadingList readings={readings} onDelete={handleDeleteReading} />
      
    // </>
    <>
      <h2>i am an archive of all your readings to date</h2>
      <Routes>
        <Route path="/" element={ <ArchivedReadingList readings={readings} onDelete={handleDeleteReading} /> } />
        <Route path="/:id" element={ <RenderArchiveItem /> } />
      </Routes>
    </>
  )
};

export default ReadingArchive;
