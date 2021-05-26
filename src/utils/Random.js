let Random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export let r = Random(0, 7);

export default Random;
