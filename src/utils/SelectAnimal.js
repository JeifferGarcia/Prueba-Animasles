import Animals from "./Animals.js";
import Countdown from "./Countdown.js";

const score = () => {
  let saveScore = 100;

  const countScore = (score) => {
    saveScore -= score;
    console.log(`Score: ${saveScore}`);
  };
  return countScore;
};

let newScore = score();

const SelectAnimal = (event) => {
  let a = Animals();
  let e = event.target.alt;
  // console.log(e);
  if (e == a) {
    console.log("animal correcto");
    Countdown();
  } else {
    newScore(10);
  }
};

export default SelectAnimal;
