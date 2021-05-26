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

  const random = () => {
    return Math.floor(Math.random() * 6);
  };

  console.log(animales[random()]);

  return animales[random()];
};

export default Animals;
