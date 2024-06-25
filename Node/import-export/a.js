const greetUser = () => {
  console.log("Good Morning");
};

const reduceTemperature = () => {
  console.log("start fan");
};

const x = 2;

export default greetUser; // ! only one default export is allowed in a file
export { reduceTemperature, x }; // ! named export can have multiple exports in a file
