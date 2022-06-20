import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './style.css';
import Congratulation from './pages/congratulation';
import Play from './pages/play';
import Home from './pages/home';
import NumberContext from './contexts/numberContext';

export default function App() {

  const [numberToGuess, setNumberToGuess] = useState();

  return (
    <NumberContext.Provider
      value={{
        numberToGuess,
        setNumberToGuess,
      }}
    >
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/play" element={<Play />} />
      <Route path="/congratulation" element={<Congratulation />} />
    </Routes>
    </NumberContext.Provider>

  );
}
