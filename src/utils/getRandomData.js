export const getRandomData = ({ size = 100 }) => {
  const randomYData = [...new Array(size)].map(() =>
    Math.round(Math.random() * 40)
  );
  return randomYData.map((val, idx) => {
    return { x: idx, y: val };
  });
};
