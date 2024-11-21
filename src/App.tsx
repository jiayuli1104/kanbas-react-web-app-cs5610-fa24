import React from 'react';
import './App.css';
import Labs from './Labs';
import Kanbas from './Kanbas';
import Landing from './Landing';
import { HashRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import store from "./Kanbas/store";
import { Provider } from "react-redux";

function App() {
  return (

    <HashRouter>
      <Provider store={store}>
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="Landing" />} />
            <Route path="/Landing/*" element={<Landing />} />
            <Route path="/Labs/*" element={<Labs />} />
            <Route path="/Kanbas/*" element={<Kanbas />} />
          </Routes>
        </div>
      </Provider>
    </HashRouter>

  );
}

export default App;
