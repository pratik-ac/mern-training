import React from "react";

// * conditional rendering
// ? odd even

// ? ------------------------example 1----------------------------------------
// const App = () => {
//   let num = 10;
//   let remainder = num % 2;

//   if (remainder === 0) {
//     return <p> {num} Even Number</p>;
//   }
//   return <p> {num} Odd Number</p>;
// };

// ? --------------------------example 2-------------------------------------
// const App = () => {
//   let num = 11;
//   let remainder = num % 2;

//   return <p>{`${remainder === 0 ? "even" : "odd"}`}</p>;
// };

// ? --------------------------example 3-------------------------------------
const App4 = () => {
  let isLoggedIn = true;
  //   if (isLoggedIn) {
  //     return <p>You are logged in user</p>;
  //   }
  //   return <p>You are logged out user</p>;
  return (
    <p>{isLoggedIn ? "You are logged in user" : "You are logged out user"}</p>
  );
};

export default App4;
