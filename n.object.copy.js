// ? object copy

// const print = (values) => {
//   console.log(values);
// };

// const student1 = {
//   name: "Sandhya",
//   college: "HCOE",
//   isGraduated: true,
//   image: null,
//   address: {
//     permanent: "A",
//     temporary: "B",
//   },
// };

// print(student1);

// ? shallow copy
// const student2 = student1;
// student2.name = "Ram";

// print(student1);

// ? spread operator (...)
// * example 1
// const student2 = { ...student1 };
// student2.name = "Munni";
// print(student1);
// print(student2);

// ? not a deep copy
// * example 2
// const student2 = { ...student1 };
// student2.address.permanent = "Z";
// print(student1);

// ? deep copy
// * structured copy
// const student2 = structuredClone(student1);
// student2.address.permanent = "Z";
// print(student2);
// print(student1);

// ? why do we use objects
// * Grouping Related Data and Functions
// * Dynamic Nature
// * Key-Value Pairs
// * Inheritance and Prototypes
// * Encapsulation and Data Hiding
// * Organizing Code in a More Structured Way
// * JSON and Data Exchange

// ? classwork
// const myHouseDetails = {
//   numberOfRooms: 4,
//   numberOfMembers: 3,
//   colorOfHouse: "white",
//   builtYear: 1990,
//   numberOfStoreys: 2,
// };

// console.log(myHouseDetails);

// delete myHouseDetails.numberOfMembers;
// console.log(myHouseDetails);

// myHouseDetails.numberOfRooms += 5;
// console.log(myHouseDetails);

// myHouseDetails.estimatedPriceOfHouse = 5000000;
// console.log(myHouseDetails);

// console.log(
//   `I have a ${myHouseDetails.colorOfHouse} coloured house with ${myHouseDetails.numberOfRooms} rooms where ${myHouseDetails.numberOfMembers} people are living. The house is ${myHouseDetails.numberOfStoreys} storey and was built in ${myHouseDetails.builtYear} with an estimated budget of ${myHouseDetails.estimatedPriceOfHouse}.`
// );
