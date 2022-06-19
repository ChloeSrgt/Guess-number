import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './style.css';
import Congratulation from './pages/congratulation';
import Play from './pages/play';
import Home from './pages/home';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Play" element={<Play />} />
      <Route path="/Congratulation" element={<Congratulation />} />
    </Routes>
  );
}
