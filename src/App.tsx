import React from 'react';
import Kanbas from "./Kanbas";
//import logo from './logo.svg';
//import './App.css';
import Labs from "./Labs";
import Landing from './Landing';
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
      <HashRouter>
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="/Kanbas" />} />
            <Route path="/Labs/*" element={<Labs />} />
            <Route path="/Kanbas/*" element={<Kanbas />} />
            <Route path="/Landing/*" element={<Landing />} />
          </Routes>
        </div>  
      </HashRouter>
  );
}

export default App;
