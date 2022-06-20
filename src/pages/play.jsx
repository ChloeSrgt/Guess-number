import { useState, useContext } from "react";
import NumberContext from "../contexts/numberContext";
import { useNavigate, Navigate } from "react-router-dom";
import saw3 from "../asset/saw3.gif";


function Play() {

const [stockedNumber, setStockedNumber] = useState();
const [gameStarting, setGameStarting] = useState(false);
const [inputValue, setInputValue] = useState();
const [message, setMessage] = useState("");
const navigate = useNavigate();


const {numberToGuess, counter, setCounter} = useContext(NumberContext);



  const onNumber = (event) => {
    setInputValue(parseInt(event.target.value));
    setMessage(event.target.value);
  }
  const onOk = () => { 
    setGameStarting(true);
    setStockedNumber(inputValue);
    setCounter(counter +1);
    setMessage('');
  }

  const Enter = (e) => {
      if (e.key === "Enter") {
        onOk();
        setInputValue("");
      }
  }

  return <>
  <div className="body">
   <img className='saw3' src={saw3} alt="saw" />   

  <div className="bodyplay">
    {gameStarting && stockedNumber < numberToGuess && <p>Plus grand que {stockedNumber}</p>}
    {gameStarting && stockedNumber > numberToGuess && <p>Moins grand que {stockedNumber}</p>}
    {gameStarting && stockedNumber === numberToGuess && <Navigate to="/congratulation" replace={true}/>}
    {!gameStarting && <h1 className="numero">Tapez votre numéro</h1>}
    </div> 

    <div className="valueCounter">
    <input 
      value={message}
      onKeyPress={Enter}
      onChange={onNumber} type='number'/>
    <button className="enter" onClick={onOk}>Ok</button>
    <div className="counter">{counter > 0 ? <p>Vous êtes à {counter} tours</p> : ""}</div>
    </div> 
    </div> 
    </>

;}


export default Play;

