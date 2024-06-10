// ? object
// ! key - value pair
// ? key/property/field

// const studentDetails = {};
// console.log(studentDetails, typeof studentDetails);

// const obj1 = {};
// const obj2 = {};
// console.log(obj1 === obj2); // false -> interview question

// let student1 = {
//   firstName: "John",
//   lastName: "Shrestha",
//   isGraduated: false,
//   permanentAddress: "Kathmandu",
//   temporaryAddress: "Bhaktapur",
// };
// console.log(student1);

// console.log(`My name is ${student1.firstName}`);

// ? to access values in object
// ? dot operator
// ? square bracket operator

// console.log(student1.firstName);
// console.log(student1.permanentAddress);

// console.log(student1["firstName"]);
// console.log(student1["temporaryAddress"]);

// ? CRUD
// ? C => Create/Add
// ? R => Read/Retrieve
// ? U => Update/Edit
// ? D => Delete/Remove

// let student1 = {
//   firstName: "John",
//   lastName: "Shrestha",
//   isGraduated: false,
//   address: {
//     permanent: "Baneshwor",
//     temporary: "Sydney",
//   },
// };

// ? Upsert(Update or Insert)
// student1.firstName = "Patrick";
// student1.age = 27;

// student1["address"]["permanent"] = "Birgunj";
// console.log(student1);

// ? Read
// console.log(student1.address.permanent);
// console.log(student1["address"]["permanent"]);
// console.log(student1.address["permanent"]);
// console.log(student1["address"].permanent);

// let nationDetail = {
//   name: "Nepal",
//   population: "3 corer",
//   perCapita: 1400,
// };

// ? Delete
// delete nationDetail.name; // or delete nationDetail['name']

// console.log(nationDetail);

// const cupDetails = {
//   name: "Water cup",
//   brand: "Serve well",
//   color: "pink",
//   color: "Green",
//   name: "Tea cup",
// };

// console.log(cupDetails);
