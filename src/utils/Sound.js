import Animals from "./Animals.js";

const sonido = document.getElementById("sonido");

const Sound = () => {
  sonido.innerHTML = `<audio autoplay src='./src/assets/sounds/${Animals()}.mp3'></audio>`;
};

export default Sound;
