import NumberContext from "../contexts/numberContext";
import { useContext } from "react";
import counterContext from "../contexts/counterContext";
import { useNavigate, Navigate } from "react-router-dom";
import saw2 from "../asset/saw2.gif";

function Congratulation() {
  const {numberToGuess} = useContext(NumberContext);
  const {counter, setCounter} = useContext(counterContext);
  const navigate = useNavigate();


  const replay = () => {
    setCounter(0);
    navigate('/');
  }

  return (
    <div className="Finish">
    <img className='saw2' src={saw2} alt="saw" />  
  <h1>Vous avez réussi à trouver {numberToGuess} en {counter} tours</h1>
  <button className="startGame" onClick={replay}>Reprendre le risque?</button>
  </div>
  )
}

export default Congratulation;
