// error
// ? error is inevitable

// const x = 5;
// x = 4;
// console.log("HI");

// ? error handling

// const x = 2;
// try {
//   x = 5;
// } catch (error) {
//   console.log(error.message);
// }
// console.log("Hi");

// let x = 2;
// try {
//   x = 5;
//   console.log("Hit"); // ! if hit is printed there are no error in try block
// } catch (error) {
//   console.log(error.message);
// }
// console.log("Hi");

// const x = 2;
// try {
//   x = 5;
//   console.log("Hit");
// } catch (error) {
//   console.log(error.message);
// } finally {
//   console.log("Send email"); // ! finally code block is printed even if there is error in try block
// }
// console.log("Hi");

// ? -------------------------------example 2---------------------------------
// try {
//   let user = null; // ! throws user does not exists
//   let user = { name: "Arun" }; // ! throws Hey man Wassup
//   if (!user) {
//     throw new Error("User does not exist");
//   }
//   console.log("Hey man! Wassup");
// } catch (error) {
//   console.log(error.message);
// }
