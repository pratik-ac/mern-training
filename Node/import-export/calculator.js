const doSum = (x, y) => {
  return x + y;
};

const sayHello = (name = "user") => {
  console.log(`Hello ${name}`);
};

const PI = Math.PI;

export { doSum, sayHello, PI }; // ! normal export can have multiple exports in a file
