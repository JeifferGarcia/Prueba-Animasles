import { getAnimal } from "./Animals.js";
import Animals from "./Animals.js";
import Countdown from "./Countdown.js";
import Random from "./Random.js";

const SelectAnimal = (event) => {
  let a = getAnimal;
  let e = event.target.alt;

  if (e === a) {
    console.log("animal correcto");
    Animals();
    Countdown();
  }
};

export default SelectAnimal;
