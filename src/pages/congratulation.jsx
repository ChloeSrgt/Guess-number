import NumberContext from "../contexts/numberContext";
import { useContext } from "react";
import counterContext from "../contexts/counterContext";

function Congratulation() {
  const {numberToGuess} = useContext(NumberContext);
  const {counter} = useContext(counterContext);



  return <h1>Vous avez réussi à trouver {numberToGuess} en </h1>;
}

export default Congratulation;
