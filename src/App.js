import React from "react";
import NavBar from "./components/NavBar.jsx";
import ReadingContainer from "./containers/ReadingContainer.jsx";
import ArchiveContainer from "./containers/ArchiveContainer.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MainContainer from "./containers/ReadingContainer.jsx";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainContainer />} />
        <Route path="/reading" element={<ReadingContainer />} />
        <Route path="/archive/*" element={< ArchiveContainer />} />
      </Routes>
    </Router>
  );
}

export default App;




