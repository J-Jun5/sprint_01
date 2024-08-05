import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage.js';
import Itemspage from './pages/Itemspage.js';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/items" element={<Itemspage />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
}

export default App;
