import React, { useState, useEffect } from 'react';
import { Routes, Route, useParams } from "react-router-dom";
import ArchivedReadingList from './ArchivedReadingList.jsx';
import ArchiveItem from './ArchiveItem.jsx';
import { readingAPI } from '../services/api';
import { ERROR_MESSAGES, UI_TEXT } from '../constants/index.jsx';

const ReadingArchive = () => {
  const [readings, setReadings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReadings = async () => {
      try {
        setLoading(true);
        const data = await readingAPI.getAllReadings();
        setReadings(data);
        setError(null);
      } catch (error) {
        console.error('Error fetching readings:', error);
        setError(ERROR_MESSAGES.FETCH_READINGS_FAILED);
      } finally {
        setLoading(false);
      }
    };
    
    fetchReadings();
  }, []);

  const handleDeleteReading = async (readingId) => {
    try {
      await readingAPI.deleteReading(readingId);
      setReadings(readings.filter(reading => reading.id !== readingId));
    } catch (error) {
      console.error('Error deleting reading:', error);
      setError(ERROR_MESSAGES.DELETE_READING_FAILED);
    }
  };

  const RenderArchiveItem = () => {
    const { id } = useParams();
    const chosenReading = readings.find(reading => reading.id === parseInt(id));

    if (!chosenReading) {
      return <div className="error-message">{ERROR_MESSAGES.READING_NOT_FOUND}</div>;
    }

    return <ArchiveItem reading={chosenReading} />;
  };

  if (loading) {
    return <div className="loading">{UI_TEXT.LOADING}</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <ArchivedReadingList 
            readings={readings} 
            handleDeleteReading={handleDeleteReading} 
          />
        } 
      />
      <Route path="/:id" element={<RenderArchiveItem />} />
    </Routes>
  );
};

export default ReadingArchive;
