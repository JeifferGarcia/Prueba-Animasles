import { getAnimal } from "./Animals.js";
import Animals from "./Animals.js";
import { newScore } from "./Score.js";

const Clicks = (event) => {
  let n = event.target.nodeName;
  let a = event.target.alt;

  if (n === "IMG" && a === getAnimal) {
    console.log(n, a);
    Animals();
  } else if (n === "IMG" && a != getAnimal) {
    newScore(10);
  }
};

export default Clicks;
