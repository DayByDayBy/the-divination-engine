import React from "react";
import NavBar from "./components/NavBar";
import ReadingContainer from "./containers/ReadingContainer";
import ArchiveContainer from "./containers/ArchiveContainer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MainContainer from "./containers/ReadingContainer";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainContainer />} />
        <Route path="/reading" element={<ReadingContainer />} />
        <Route path="/readings/all" element={< ArchiveContainer />} />
      </Routes>
    </Router>
  );
}

export default App;




