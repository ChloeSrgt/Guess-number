import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './style.css';
import Congratulation from './pages/congratulation';
import Play from './pages/play';
import Home from './pages/home';
import NumberContext from './contexts/numberContext';
import counterContext from './contexts/counterContext'

export default function App() {

  const [numberToGuess, setNumberToGuess] = useState();
  const [counter, setCounter] = useState(0);
  return (
    <NumberContext.Provider
      value={{
        numberToGuess,
        setNumberToGuess,
      }}
    >
       <counterContext.Provider
      value={{
        counter,
        setCounter,
      }}
    >


    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/play" element={<Play />} />
      <Route path="/congratulation" element={<Congratulation />} />
      <Route path="/congratulation" element={<Navigate to="Congratulation" />}/>
    </Routes>
    </counterContext.Provider>
    </NumberContext.Provider>


  );
}
