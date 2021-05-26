import Animals from "./Animals.js";
import Countdown from "./Countdown.js";

const app = document.getElementById("app");
const constainerScore = document.createElement("div");
constainerScore.classList = "score";

const score = () => {
  let saveScore = 100;

  const countScore = (score) => {
    saveScore -= score;
    app.append(constainerScore);
    console.log(`Score: ${saveScore}`);
    constainerScore.innerHTML = `Score: ${saveScore}`;
  };
  return countScore;
};

let newScore = score();

const SelectAnimal = (event) => {
  let a = Animals();
  let e = event.target.alt;
  if (e == a) {
    console.log("animal correcto");
    Countdown();
  } else {
    newScore(10);
  }
};

export default SelectAnimal;
