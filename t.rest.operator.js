// rest operator => acts as collector
// (...)

const getSum = (a, b, ...otherValues) => {
  const total = otherValues.reduce((total, item) => {
    total += item;
  }, 0);
  return total + a + b;
};
const result = getSum(1, 2, 3, 4, 5);
console.log(result);
