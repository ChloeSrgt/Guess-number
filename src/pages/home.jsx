import { randomRange } from '../utils/random';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import NumberContext from '../contexts/numberContext';
import saw from "../asset/saw.gif";


function Home() {
  const navigate = useNavigate();
  

  const {setNumberToGuess} = useContext(NumberContext);

  const onStartGame = () => {
    setNumberToGuess(randomRange(1 ,100));
    navigate('/play');
  };

  return <div className='Game'>  
     <img className='Saw' src={saw} alt="saw" />   
    <h1 className='phrase'>Nous allons jouer à un jeu.</h1>
    <button onClick={onStartGame}>Start Game</button></div>;

}


export default Home;
