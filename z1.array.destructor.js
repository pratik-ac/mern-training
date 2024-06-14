// ? array destructure

const numList = [11, 25, 47];

// console.log(numList[0]);
// console.log(numList[1]);
// console.log(numList[2]);

const [a, b, c] = numList; // ! const[a, _, c] => _ used for no use case value

let sum = a + b + c;
console.log(sum);
