const app = document.getElementById("app");
const constainerScore = document.createElement("div");
constainerScore.classList = "score";

const Score = () => {
  let saveScore = 100;

  const countScore = (score) => {
    saveScore -= score;
    app.append(constainerScore);
    console.log(`Score: ${saveScore}`);
    constainerScore.innerHTML = `Score: ${saveScore}`;
  };
  return countScore;
};

export let newScore = Score();

export default Score;
