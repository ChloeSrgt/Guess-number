import { randomRange } from '../utils/random';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import NumberContext from '../contexts/numberContext';

function Home() {
  const navigate = useNavigate();
  

  const {setNumberToGuess} = useContext(NumberContext);

  const onStartGame = () => {
    setNumberToGuess(randomRange(1 ,100));
    navigate('/play');
  };

  return <button onClick={onStartGame}>Start Game</button>;
}


export default Home;
