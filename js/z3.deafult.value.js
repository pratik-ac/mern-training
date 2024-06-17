// ? default value

// const getSum = (x, y = 0) => {
// ! y = 0 is default value
//   let sum = x + y;
//   return sum;
// };

// const res = getSum(2, 10);
// console.log(res);

// const getSum = (z, x = 1, y = 0) => {
// ! default value should be kept at last in parameters
//   let sum = x + y + z;
//   return sum;
// };

// const res = getSum(2);
// console.log(res);

// const greetUser = (userName = "User") => {
// ! Use Case of Default value
//   console.log(`Good Morning ${userName}`);
// };
// greetUser("Patrick");
// greetUser();

// ? --------------------------example 2-----------------------------------
// example without default value

// const greetUser = (userName) => {
//   console.log(`Good Morning ${userName || "User"}`);
// };
// greetUser();
