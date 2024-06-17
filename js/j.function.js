// ! function
// * DRY => Do not Repeat Yourself
// * objectives: code reusability, to reduce code redundancy, single point of failure

// ? syntax
// *function functionName() {
// *code block
// *}

// function sayHello(userName) {
//   console.log(`Hello ${userName}!`);
// }

// sayHello("Patrick");

// function getSum(a, b) {
//   let sum = a + b;
//   return sum;
// }

// console.log(getSum(10, 20));

// ? or

// let sum = 0;
// function getSum(a, b) {
//   sum = a + b;
// }

// console.log(sum);

// ? arrow function

// const sayHi = (studentName = "user") => {
// ! default value = "user" if no value is passed
//   console.log(`Hi ${studentName}!`);
// };

// sayHi("Patrick");

// * ----------------case 2-----------------
// const doSum = (a, b) => {
//   a = Number(a); // * a = +a
//   b = Number(b); // * b = +b
//   console.log(a + b);
// };
// doSum("10", "20");

// ? WAP to print product of two numbers using arrow function

// const doProduct = (num1, num2) => {
//   const product = num1 * num2;

//   return product;
// };

// const productResult = doProduct(10, 20);
// console.log(productResult);

// * ---------------------OR----------------------

// const doProduct = (num1, num2) => num1 * num2;

// const productResult = doProduct(10, 20);
// console.log(productResult);

// ? WAF that check whether a number is even or odd using arrow function

// const checkEvenOdd = (num) => {
//   let res = 0;
//   if (num % 2 === 0) {
//     res = "Even";
//   } else {
//     res = "Odd";
//   }
//   return res;
// };

// const result = checkEvenOdd(7);
// console.log(result);

// *-----------------OR-------------------

// const checkEvenOdd = (num) => (num % 2 === 0 ? "Even" : "Odd");

// const result = checkEvenOdd(7);
// console.log(result);

// ? WAF to check polarity of a number
// ? function should return 'positive' / 'negative' / 'zero'

// const checkPolarity = (num) => {
//   let res = "";

//   if (num > 0) {
//     res = "Positive";
//   } else if (num < 0) {
//     res = "Negative";
//   } else {
//     res = "Zero";
//   }

//   return res;
// };

// const result = checkPolarity(+9);
// console.log(result);

// * ----------------OR-------------------

// const checkPolarity = (num) =>
//   num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";

// const result = checkPolarity(7);
// console.log(result);
