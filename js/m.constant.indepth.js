// ? constant
// ! in js, constant means cannot be re-assigned

// const x = 7;
// x = 9; // ! gives error

// ? mutation => process of having change
// ? mutate => change
// ? mutable => changeable
// ? immutable => unchangeable

// * primary data type(string, number, boolean, undefined, null) => cannot be re-assigned, thus immutable
// * non-primary data type(object) => cannot be re-assigned but mutable

// ? immutable
// const isDeveloped = false;
// isDeveloped = true;

// ? cannot be re-assigned but mutable
// const phoneDetails = {
//   brand: "Samsung",
// };

// phoneDetails.brand = "Apple";
// console.log(phoneDetails);

// phoneDetails = true; // ! constant cannot be reassigned

// const obj1 = Object.freeze({ // ! freezes the key value thus cannot be update and add and delete
//   name: "Rohan",
// });

// obj1.name = "Roshan";
// obj1.age = 25;
// console.log(obj1);

// const obj1 = {
//   name: "A",
// };
// const obj2 = {
//   name: "A",
// };

// TODO: after array

// const obj1Keys = Object.keys(obj1);
// const obj2Keys = Object.keys(obj2);

// console.log(obj1Keys, obj2Keys);
// console.log(Object.values(obj1));
