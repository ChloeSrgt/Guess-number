import { useState, useContext } from "react";
import NumberContext from "../contexts/numberContext";

function Play() {

const [stockedNumber, setStockedNumber] = useState();
const [gameStarting, setGameStarting] = useState(false);
const [inputValue, setInputValue] = useState();
const [counter, setCounter] = useState(1);

const {numberToGuess} = useContext(NumberContext);

  const onNumber = (event) => {
    setInputValue(parseInt(event.target.value));
  }
  const onOk = () => { 
    setGameStarting(true);
    setStockedNumber(inputValue);
    setCounter(counter+1)
  }

  const Enter = (e) => {
      if (e.key === "Enter") {
        onOk();
      }
  }

  return <>
      
    {gameStarting && stockedNumber < numberToGuess && <p>Plus grand que {stockedNumber}</p>}
    {gameStarting && stockedNumber > numberToGuess && <p>Moins grand que {stockedNumber}</p>} 
    {!gameStarting && <h1>Tapez votre numéro</h1>}

    <input 
      onKeyPress={Enter}
      onChange={onNumber} type='number'/>
    <button onClick={onOk}>Ok</button>
  </>
;}
export default Play;

