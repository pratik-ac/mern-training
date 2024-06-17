// ? asynchronous

// ? synchronous => existing or occurring at the same time
// ? asynchronous => not existing or occurring at the same time

// node => single threaded
// ? 1.non-blocking => does not block code execution
// ? 2.real world scenario of code blocking =
// ? -for loop for billion times
// ? -image processing
// ? -API request
// ? -db operation

// u => ultra power saving
// k => unlocked
// H => High performance

// console.log("HI");

// setTimeout(() => {
//   console.log("Time - out");
// }, 1000);

// console.log("Hello");

// ? example

// const multiply = (num1, num2) => num1 * num2; // ! call stack example

// const square = (n) => {
//   const squaredNumber = multiply(n, n);
//   return squaredNumber;
// };

// const printNumber = () => {
//   const result = square(4);
//   console.log(result);
// };

// printNumber();

// ? recursive
// ! Error:maximum call stack size exceeded

// const sayHi = () => {
//   sayHi();
// };

// sayHi();
