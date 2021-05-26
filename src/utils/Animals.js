const Animals = () => {
  const animales = [
    "burro",
    "caballo",
    "perro",
    "vaca",
    "gallina",
    "cerdo",
    "conejo",
    "cabra",
  ];
  let aleat = parseInt(Math.random() * 8);

  function res(a, b) {
    return a - b;
  }

  return animales[res(animales.length, aleat)];
};

export let getAnimal = Animals();

export default Animals;
