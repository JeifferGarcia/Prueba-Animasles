import Sound from "./Sound.js";

const app = document.getElementById("app");
const count = document.createElement("div");
const sonido = document.getElementById("sonido");
const pito = () => {
  sonido.innerHTML = `<audio autoplay src='./src/assets/sounds/pito.mp3'></audio>`;
};

app.append(count);

const Countdown = () => {
  let number = 3;
  setInterval(() => {
    if (number) {
      console.log(number);
      count.textContent = number;
      number--;
      count.classList.add("count");
      pito();
    }
  }, 1000);
  setTimeout(Sound, 4000);
};
export default Countdown;
