import React from 'react';
import './App.css';
import Labs from './Labs';
import Kanbas from './Kanbas';
import Landing from './Landing';
import { HashRouter, Routes, Route, Link, Navigate } from 'react-router-dom';

function App() {
  return (

    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Landing"/>}/> 
          <Route path="/Landing/*" element={<Landing />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
    </HashRouter>

  );
}

export default App;