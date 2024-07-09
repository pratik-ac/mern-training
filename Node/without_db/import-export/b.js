import respectUser, { reduceTemperature, x as y } from "./a.js"; // * default export can be renamed while importing

respectUser();

reduceTemperature();

const x = 8; // ! this x will not be exported as it is not exported in a.js but y will refer to x

console.log(x);
console.log(y);
