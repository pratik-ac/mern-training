// ? methods in array
// push, pop, shift, unshift, reverse

// ? push => to add element(s) to end of array
// ? pop => to remove last elements from array

// const numList = [10, 11, 12];

// ! push
// numList.push(13, 14, 15);
// console.log(numList);

// ! pop
// numList.pop();
// numList.pop();
// console.log(numList);

// ? shift => to remove first item from array
// ? unshift => to add item(s) at starting of array

// let studentList = ["Saugat", "Shubham", "Samundra", "Smirti"];

// ! shift
// studentList.shift();
// console.log(studentList);

// ! unshift
// studentList.unshift("Suyasha", "Utsarga", "Unik");
// console.log(studentList);

// ? reverse => reverse order of items in array

const priceList = [15, 25, 35, 45];

// ! reverse
// priceList.reverse();
// console.log(priceList);

// ! toReversed
// const newPriceList = priceList.toReversed();
// console.log(newPriceList);

// ? includes
// ? checks whether array contains specific value or not
// ? results in boolean (true/false)

// const laptops = ["Macbook M3", "TUF F15", "Nitro 5", "A15"];

// const results = laptops.includes("A15"); // ! must be same in array BEWARE of SPACE
// console.log(results);

// const currentRoute = "/user/edit/1"; // * USE-CASE
// const result = currentRoute.includes("edit");
// console.log(result);

// ? slice => it does not change original array
// ? returns new array with portion of original array
// ? when given start and end => start is included, item of end index is excluded

// const animals = ["ant", "bison", "camel", "duck", "elephant"];

// const newList = animals.slice(2);
// const newList = animals.slice(1, 4);
// console.log(newList);

// ? splice => changes original array
// ? remove or replace existing items

// const months = ["Jan", "Mar", "Apr", "May", "Jun"];
// months.splice(1); // ! removes items from this index
// months.splice(2, 2); // ! first parameter:startIndex, second parameter: deleteCount
// months.splice(1, 0, "Feb");
// months.splice(4, 0, "Jul", "Aug", "Sept");
// console.log(months);

// ? sort
// ? ascending or descending

// ! string

// let studentList = [
//   "Saugat",
//   "Abhishek",
//   "Yadav",
//   "Smriti",
//   "Yeshika",
//   "Lokendra",
// ];

// studentList.sort(); // ! asc

// studentList.sort().reverse(); // ! desc

// console.log(studentList);

// ! numbers

// let numList = [1, 100, 11, 2, 20, 50, 51, 505, 111, 23];

// numList.sort((a, b) => { // ! asc
//   return a - b;
// });

// numList.sort((a, b) => b - a); // ! desc

// console.log(numList);
