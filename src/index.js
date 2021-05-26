import SelectAnimal from "./utils/SelectAnimal.js";
import Countdown from "./utils/Countdown.js";
import Clicks from "./utils/Clicks.js";

const container = document.querySelector(".container__grid");
container.addEventListener("click", SelectAnimal);
container.addEventListener("click", Clicks);

const btn = document.getElementById("btn-play");
btn.addEventListener("click", Countdown);
