// promise => something that happens in future

// ? TRI STATE
// ? pending
// ? success
// ? failure

// * to get result, we need to resolve promise

// ? 1.call back function
const getSum = (a, b) => {
  setTimeout(() => {
    return a + b;
  }, 1000);
};
const res = getSum(2, 5);
console.log(res);
// ? 2. .then.catch
// ? 3. async await
