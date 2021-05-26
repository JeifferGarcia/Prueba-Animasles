import { getAnimal } from "./Animals.js";

const sonido = document.getElementById("sonido");

const Sound = () => {
  sonido.innerHTML = `<audio autoplay src='./src/assets/sounds/${getAnimal}.mp3'></audio>`;
};

export default Sound;
