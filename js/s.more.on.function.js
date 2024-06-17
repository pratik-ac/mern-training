// ? Higher Order Function
// 1 .callback function (function as an argument to another function)
// 2. closure (function returning function)

// callback function
// ? function which is passed as an argument to another function
// ? is called callback function

// const getSum = (x, y, callback) => {
//   let sum = x + y;
//   callback(sum);
// };

// getSum(5, 7, (value) => {
//   console.log(value);
// });

// ? function returning function
// closure => function + lexical environment(surround environment)

// const makeAdder = (x) => {
//   const doSum = (y) => {
//     let sum = x + y;

//     return sum;
//   };
//   return doSum;
// };

// const doSum5 = makeAdder(5); // ! makeAdder is like function factory
// const sum = doSum5(10);
// console.log(sum);

// const doSum25 = makeAdder(25);
// const sum = doSum25(5);
// console.log(sum);

//----------------------or---------------------
// const sum = makeAdder(25)(5);
// console.log(sum);

// ? aesthetic

// const makeAdder = (x) => (y) => x + y;

// console.log(makeAdder(10)(5));
