import SelectAnimal from "./utils/SelectAnimal.js";
import Countdown from "./utils/Countdown.js";
const container = document.querySelector(".container__grid");
container.addEventListener("click", SelectAnimal);

const btn = document.getElementById("btn-play");
btn.addEventListener("click", Countdown);
